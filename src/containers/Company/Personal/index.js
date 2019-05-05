import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PersonDetails from '../../../components/Company/Personal'
import { updateProfile, clearCompProfError, fetchProfile } from './action'

class Personal extends Component {
	state = {
		loading: false,
		firstname: '',
		lastname: '',
		email: '',
		mobileno: ''
	}

	async componentWillMount() {
		if (this.props.loginReducer.type !== 'company') {
			this.props.history.push('/')
		}
		this.setState({ loading: true })
		await this.props.fetchProfile()
		this.setState({
			...this.state,
			...this.props.values
		})
		await this.updateUserProps()
		await this.props.setData(this.state)
		this.setState({ loading: false })
	}
	updateUserProps = async () => {
		const {
			user: { companyMember }
		} = this.props.companyUserReducer
		await this.setState({
			firstname: companyMember.firstname ? companyMember.firstname : '',
			lastname: companyMember.lastname ? companyMember.lastname : '',
			email: companyMember.email ? companyMember.email : '',
			mobileno: companyMember.mobileno ? companyMember.mobileno : ''
		})
	}
	submit = async (values) => {
		await this.setState({
			...this.state,
			...values
		})
		await this.props.setData(this.state)
		await this.props.updateProfile(this.state, 'https://api.alterhop.com/api/v1/company/member/update')
		await this.props.front()
	}
	render() {
		if (this.state.loading) {
			return <div>Loading ...</div>
		}
		return <PersonDetails onSubmit={this.submit} initialValues={this.state} />
	}
}

const mapStateToProps = (state) => {
	return {
		companyUserReducer: state.companyUserReducer,
		loginReducer: state.loginReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updateProfile, clearCompProfError, fetchProfile }, dispatch)
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Personal)
)
