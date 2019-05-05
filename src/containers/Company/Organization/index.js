import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import OrganizationDetails from '../../../components/Company/Organization'
import { fetchCompany, postCompany } from './action'

class Organization extends Component {
	state = {
		loading: false,
		orgname: '',
		orgdescription: '',
		orgwebsite: ''
	}
	async componentWillMount() {
		if (this.props.loginReducer.type !== 'company') {
			this.props.history.push('/')
		}
		this.setState({ loading: true })
		await this.props.fetchCompany()
		this.setState({
			...this.state,
			...this.props.values
		})
		await this.updateUserProps()
		await this.props.setData(this.state)
		this.setState({ loading: false })
	}

	updateUserProps = async () => {
		const company = this.props.organizationReducer.company.company
		await this.setState({
			name: company.name ? company.name : '',
			website: company.website ? company.website : '',
			description: company.description ? company.description : ''
		})
	}
	submit = async (values) => {
		await this.setState({
			...this.state,
			...values
		})
		await this.props.setData(this.state)
		if (!this.props.organizationReducer.company.company) {
			await this.props.postCompany(this.state, 'https://api.alterhop.com/api/v1/company/create')
		}
	}
	render() {
		const { front, back } = this.props
		if (this.state.loading) {
			return <div>Loading ...</div>
		}
		return <OrganizationDetails onSubmit={this.submit} front={front} back={back} initialValues={this.state} />
	}
}

const mapStateToProps = (state) => {
	return {
		organizationReducer: state.organizationReducer,
		loginReducer: state.loginReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ postCompany, fetchCompany }, dispatch)
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Organization)
)
