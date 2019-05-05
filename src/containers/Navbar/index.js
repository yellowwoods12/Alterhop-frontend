import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AltNavbar from '../../components/Navbar'
import { logout } from '../Login/action'

class Navbar extends Component {
	render() {
		const {
			loginReducer: { loggedIn },
			logout
		} = this.props
		return (
			<>
				<AltNavbar loggedIn={loggedIn} logout={logout} />
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loginReducer: state.loginReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ logout }, dispatch)
}
export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Navbar)
)
