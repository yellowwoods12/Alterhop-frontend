import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUser, updateUser, userClearErr } from './action'
import { showToast } from '../ToastMessage'
import Home from '../../components/Home'
import LoadingComponent from '../../components/LoadingComponent'
import StaticHome from '../../components/StaticHomepage'

class HomePage extends Component {
	state = {
		uiloading: false,
		loading: false,
		email: '',
		username: '',
		firstname: '',
		lastname: '',
		branch: '',
		cgpa: '',
		educatioin: '',
		mobileno: '',
		technical: [],
		quant: [],
		internships: []
	}

	async componentDidMount() {
		// await this.setState({ uiloading: true })
		// const { loggedIn } = this.props.loginReducer
		// if (loggedIn) {
		// 	await this.props.fetchUser()
		// 	await this.updateUserProps()
		// }
		// await this.setState({ uiloading: false })
	}

	updateProps = () => {
		this.setState({ uiloading: true })
		this.props.fetchUser()
		this.updateUserProps()
		this.setState({ uiloading: false })
	}
	handleTechnicalChange = (values) => {
		this.setState({ technical: values })
	}

	handleQuantChange = (values) => {
		this.setState({ quant: values })
	}

	handleInternshipsChange = (values) => {
		this.setState({ internships: values })
	}

	updateUserProps = async () => {
		const {
			userReducer: { user }
		} = this.props
		await this.setState({
			username: user.username ? user.username : '',
			email: user.email ? user.email : '',
			firstname: user.firstname ? user.firstname : '',
			lastname: user.lastname ? user.lastname : '',
			branch: user.branch ? user.branch : '',
			cgpa: user.cgpa ? user.cgpa : '',
			education: user.education ? user.education : '',
			technical: user.technical ? user.technical : [],
			quant: user.quant ? user.quant : [],
			internships: user.internships ? user.internships : [],
			mobileno: user.mobileno ? user.mobileno : ''
		})
	}

	submit = async (values) => {
		this.setState({ loading: true })
		values.technical = this.state.technical
		values.internships = this.state.internships
		values.quant = this.state.quant
		await this.props.updateUser(values)
		await this.props.fetchUser()
		await this.updateUserProps()
		this.setState({ loading: false })
		showToast('Successfully updated your profile', this.props.userClearErr)
	}
	render() {
		const { loading, uiloading } = this.state
		const { loggedIn, type } = this.props.loginReducer
		if (uiloading) {
			return <LoadingComponent size={100} />
		}
		if (loggedIn && type === 'student') {
			// this.updateProps()
			return (
				<Home
					loading={loading}
					onSubmit={this.submit}
					data={this.state}
					handleTechnicalChange={this.handleTechnicalChange}
					handleQuantChange={this.handleQuantChange}
					handleInternshipsChange={this.handleInternshipsChange}
				/>
			)
		} else {
			return <StaticHome />
		}
	}
}

const mapStateToProps = (state) => {
	return {
		userReducer: state.userReducer,
		loginReducer: state.loginReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchUser, updateUser, userClearErr }, dispatch)
}
export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(HomePage)
)
