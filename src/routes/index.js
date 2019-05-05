import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import { connect } from 'react-redux'
import PrivateRoute from './privateRoutes'

/**
 * [AppUIRouter : component's for testing UI]
 * should be only used in development
 */
import Loading from '../components/PageLoader'

// make them loadable
const LoadableHome = Loadable({
	loader: () => import('../containers/Home'),
	loading: Loading,
	delay: 200,
	timeout: 7000
})
const LoadableLogin = Loadable({
	loader: () => import('../containers/Login'),
	loading: Loading,
	delay: 200,
	timeout: 7000
})
const LoadableSignup = Loadable({
	loader: () => import('../containers/Signup'),
	loading: Loading,
	delay: 200,
	timeout: 7000
})

const LoadableCompany = Loadable({
	loader: () => import('../containers/Company'),
	loading: Loading,
	delay: 200,
	timeout: 7000
})

const LoadableForgetPwd = Loadable({
	loader: () => import('../containers/Forgot/Password'),
	loading: Loading,
	delay: 200,
	timeout: 7000
})

const LoadableJobDashboard = Loadable({
	loader: () => import('../containers/JobDashboard'),
	loading: Loading,
	delay: 200,
	timeout: 7000
})

class AppRouter extends Component {
	render() {
		return (
			<Switch>
				<Route component={LoadableJobDashboard} exact={true} path="/company/dashboard" />
				<Route component={LoadableHome} exact={true} path="/" />
				<Route component={LoadableLogin} exact={true} path="/login/student" />
				<Route component={LoadableLogin} exact={true} path="/login/company" />
				<Route component={LoadableSignup} exact={true} path="/signup/student" />
				<Route component={LoadableSignup} exact={true} path="/signup/company" />
				<Route component={LoadableForgetPwd} exact={true} path="/forgot/password" />
				<PrivateRoute component={LoadableCompany} exact={true} path="/company" />
				<PrivateRoute component={LoadableCompany} exact={true} path="/company/profile" />
				<PrivateRoute component={LoadableCompany} exact={true} path="/company/organization" />
				<PrivateRoute component={LoadableCompany} exact={true} path="/company/job" />
			</Switch>
		)
	}
}

export default withRouter(
	connect(
		null,
		null
	)(AppRouter)
)
