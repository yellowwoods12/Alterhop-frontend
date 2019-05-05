import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Divider } from '@blueprintjs/core'

import logo from '../StaticHomepage/images/AlterhopLogo-2.png'
import { AltField } from '../UIComponents/InputTypes'
import { AltButton } from '../UIComponents/Button'
import { required, email, password } from '../UIComponents/validate'

let LoginForm = (props) => {
	const { handleSubmit, loading, signupto } = props
	return (
		<div>
			<form onSubmit={handleSubmit} className="alt-form">
				<div className="alt-form-title">
					<h3>Login to get started</h3>
					<img src={logo} title="alterhop" alt="alterhop" />
				</div>
				<Field
					name="email"
					type="email"
					component={AltField}
					label="email"
					validate={[required, email]}
					placeholder="Enter your email"
				/>
				<Field
					component={AltField}
					label="password"
					name="password"
					placeholder="Enter your password"
					type="password"
					validate={[required, password]}
				/>
				<small className="alt-small">
					<Link to="/forgot/password">forgot your password</Link>
				</small>
				<div className="alt-form-btn">
					<AltButton loading={loading} disabled={loading} type="submit" text="submit" large={true} />
				</div>
				<div className="alt-form-divider">
					<Divider />
					<p>or else signup to continue ...</p>
					<Link to={signupto}>
						<AltButton rightIcon="arrow-right" intent="success" text="signup" large={true} />
					</Link>
				</div>
			</form>
		</div>
	)
}

const { func, bool, string } = PropTypes

LoginForm.propTypes = {
	loading: bool,
	handleSubmit: func.isRequired,
	signupto: string
}

const mapStateToProps = (state) => ({
	err: state.loginReducer.err
})

LoginForm = reduxForm({
	form: 'loginForm'
})(LoginForm)

export default withRouter(connect(mapStateToProps)(LoginForm))
