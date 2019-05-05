import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { showToast } from '../ToastMessage'
import LoginForm from '../../components/LoginForm'
import { postLogin, clearLoginError } from './action'

class Login extends React.Component {
	timer = null
	state = {
		loading: false,
		signupto: ''
	}

	componentWillMount() {
		const {
			location: { pathname }
		} = this.props
		if (pathname.split('/').includes('student')) {
			this.setState({
				signupto: '/signup/student'
			})
		}
		if (pathname.split('/').includes('company')) {
			this.setState({
				signupto: '/signup/company'
			})
		}
		if (this.props.loginReducer.loggedIn && this.props.loginReducer.type === 'student') {
			this.props.history.push('/')
		}
		if (this.props.loginReducer.loggedIn && this.props.loginReducer.type === 'company') {
			this.props.history.push('/company/profile')
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timer)
	}

	submit = async (values) => {
		const {
			location: { pathname }
		} = this.props
		this.setState({ loading: true })
		if (pathname.split('/').includes('student')) {
			// student signin
			await this.props.postLogin(values, 'https://api.alterhop.com/api/v1/user/signin', 'student')
			// this.props.history.push('/')
			this.setState({ loading: false })
			const {
				loginReducer: { err, loggedIn, message },
				clearLoginError
			} = this.props
			if (err) {
				return showToast(err, clearLoginError, true)
			}
			if (loggedIn && message) {
				showToast(message, clearLoginError)
				this.timer = setTimeout(() => {
					this.props.history.push('/')
				}, 1000)
			}
		}
		if (pathname.split('/').includes('company')) {
			// company login
			values.type = 'company'
			await this.props.postLogin(values, 'https://api.alterhop.com/api/v1/company/signin', 'company')
			this.props.history.push('/company/profile')
		}
	}
	render() {
		const { loading } = this.state
		return <LoginForm onSubmit={this.submit} loading={loading} signupto={this.state.signupto} />
	}
}

const mapStateToProps = (state) => {
	return {
		loginReducer: state.loginReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ postLogin, clearLoginError }, dispatch)
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)
