import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			rest.isAutenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
)

function mapStateToProps(state) {
	return {
		isAutenticated: state.loginReducer.loggedIn
	}
}

export default withRouter(
	connect(
		mapStateToProps,
		null
	)(PrivateRoute)
)
