import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { showToast } from '../ToastMessage'
import PasswordResetForm from '../../components/Forgot/Password'
// import { postLogin, clearLoginError } from './action'

class ForgotPassword extends React.Component {
	timer = null
	state = {
		loading: false,
		tokenSent: false
	}

	onSubmit = (values) => {
		console.log(values)
		if (this.state.tokenSent) {
			this.sendToken({ dodo: 'duck' })
			this.setState({ tokenSent: false })
		}
		if (!this.state.tokenSent) {
			this.submitToken({ dodo: 'lorem' })
			this.setState({ tokenSent: true })
		}
	}

	submitToken = async (values) => {
		console.log(values)
	}

	sendToken = async (values) => {
		console.log(values)
	}

	render() {
		const { loading } = this.state
		return (
			<PasswordResetForm
				onSubmit={this.onSubmit}
				loading={loading}
				loginto={this.state.signupto}
				sentToken={this.state.tokenSent}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loginReducer: state.loginReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	// return bindActionCreators({ postLogin, clearLoginError }, dispatch)
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ForgotPassword)
