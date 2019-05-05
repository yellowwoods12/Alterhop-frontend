import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { showToast } from '../ToastMessage'
import { postSignup, clearSignupError } from './action'
import SignupForm from '../../components/SignupForm'

class Signup extends Component {
	timer = null
	state = {
		loading: false,
		proftype: ''
	}

	componentWillMount() {
		const {
			location: { pathname }
		} = this.props
		if (pathname.split('/').includes('student')) {
			this.setState({
				proftype: 'student'
			})
		}
		if (pathname.split('/').includes('company')) {
			this.setState({
				proftype: 'company'
			})
		}
		if (this.props.loginReducer.loggedIn && this.props.loginReducer.token.split(' ')[0] === 'Bearer') {
			this.props.history.push('/')
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timer)
	}

	submit = async (values) => {
		this.setState({ loading: true })
		let pushTo = ''
		const {
			location: { pathname }
		} = this.props
		if (pathname.split('/').includes('student')) {
			// student signup
			await this.props.postSignup(values, 'https://api.alterhop.com/api/v1/user/signup')
			pushTo = 'student'
		}
		if (pathname.split('/').includes('company')) {
			// student login
			await this.props.postSignup(values, 'https://api.alterhop.com/api/v1/company/signup')
			pushTo = 'company'
		}
		this.setState({ loading: false })
		const {
			signupReducer: { err, message },
			clearSignupError
		} = this.props
		if (err) {
			return showToast(err, clearSignupError, true)
		}
		if (message) {
			showToast(message, clearSignupError)
			this.timer = setTimeout(() => {
				this.props.history.push(`/login/${pushTo}`)
			}, 1000)
		}
	}

	render() {
		const { loading } = this.state
		return <SignupForm onSubmit={this.submit} loading={loading} proftype={this.state.proftype} />
	}
}

const mapStateToProps = (state) => {
	return {
		loginReducer: state.loginReducer,
		signupReducer: state.signupReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ postSignup, clearSignupError }, dispatch)
}
export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Signup)
)
