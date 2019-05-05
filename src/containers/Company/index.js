import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from '@blueprintjs/core'

import './style.scss'
import Personal from './Personal'
import Organization from './Organization'
import Jobs from './Jobs'

class Company extends Component {
	state = {
		location: 'profile',
		data: {
			firstname: '',
			lastname: '',
			email: '',
			mobileno: '',
			orgname: '',
			orgdesc: '',
			orgwebsite: '',
			profile: '',
			openings: '',
			location: ''
		}
	}
	onProfile = () => {
		this.setState({
			location: 'profile'
		})
	}
	onOrganization = () => {
		this.setState({
			location: 'organization'
		})
	}
	onJob = () => {
		this.setState({
			location: 'job'
		})
	}
	setData = (data) => {
		this.setState({
			data: {
				...this.state.data,
				...data
			}
		})
	}
	componentWillMount() {
		if (this.props.loginReducer.type !== 'company') {
			this.props.history.push('/')
		} else if (this.state.location) {
			this.props.history.push('/company/profile')
		}
	}
	render() {
		const { location } = this.state
		return (
			<div className="data">
				<div className="steps">
					<div className={`step ${location === 'profile' ? 'active' : ''}`} id="profile" onClick={this.onProfile}>
						<Icon icon="user" iconSize={25} />
						<div className="step-content">
							<div className="step-heading">Profile</div>
							<div className="step-description">dodo lives here</div>
						</div>
					</div>
					<div
						className={`step ${location === 'organization' ? 'active' : ''}`}
						id="organization"
						onClick={this.onOrganization}>
						<Icon icon="user" iconSize={25} />
						<div className="step-content">
							<div className="step-heading">Organization</div>
							<div className="step-description">dodo lives here</div>
						</div>
					</div>
					<div className={`step ${location === 'job' ? 'active' : ''}`} id="job" onClick={this.onJob}>
						<Icon icon="user" iconSize={25} />
						<div className="step-content">
							<div className="step-heading">Job</div>
							<div className="step-description">dodo lives here</div>
						</div>
					</div>
				</div>
				<div className="step-body">
					{this.state.location === 'profile' && (
						<div className="step-content">
							<Personal front={this.onOrganization} setData={this.setData} values={this.state.data} />
						</div>
					)}
					{this.state.location === 'organization' && (
						<div className="step-content">
							<Organization front={this.onJob} back={this.onProfile} setData={this.setData} values={this.state.data} />
						</div>
					)}
					{this.state.location === 'job' && (
						<div className="step-content">
							<Jobs back={this.onOrganization} setData={this.setData} values={this.state.data} />
						</div>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loginReducer: state.loginReducer
	}
}

export default withRouter(
	connect(
		mapStateToProps,
		null
	)(Company)
)
