import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import JobDetails from '../../../components/Company/Job'
import { postJob, clearJobError } from './action'

class Job extends Component {
	state = {
		loading: false,
		profile: '',
		openings: '',
		location: ''
	}
	componentWillMount() {
		if (this.props.loginReducer.type !== 'company') {
			this.props.history.push('/')
		}
		this.setState({
			...this.state,
			...this.props.values
		})
	}
	submit = async (values) => {
		await this.setState({
			...this.state,
			...values
		})
		await this.props.setData(this.state)
		await this.props.postJob(values, 'https://api.alterhop.com/api/v1/jobs/create')
	}
	render() {
		const { back } = this.props
		return <JobDetails back={back} onSubmit={this.submit} initialValues={this.state} />
	}
}

const mapStateToProps = (state) => {
	return {
		loginReducer: state.loginReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ postJob, clearJobError }, dispatch)
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Job)
)
