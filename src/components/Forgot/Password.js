import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Divider } from '@blueprintjs/core'

import logo from '../StaticHomepage/images/AlterhopLogo-2.png'
import { AltField } from '../UIComponents/InputTypes'
import { AltButton } from '../UIComponents/Button'
import { required, email } from '../UIComponents/validate'

let PasswordResetForm = (props) => {
	const { handleSubmit, loading, sentToken } = props
	return (
		<div>
			<form onSubmit={handleSubmit} className="alt-form">
				<div className="alt-form-title">
					<h3>Type your Email address</h3>
					<img src={logo} title="alterhop" alt="alterhop" />
				</div>
				{sentToken && (
					<Field
						name="token"
						type="text"
						component={AltField}
						label="token"
						validate={[required]}
						placeholder="Enter then token"
					/>
				)}
				{!sentToken && (
					<Field
						name="email"
						type="email"
						component={AltField}
						label="email"
						validate={[required, email]}
						placeholder="Enter your email"
					/>
				)}
				<div className="alt-form-btn">
					<AltButton
						loading={loading}
						disabled={loading}
						type="submit"
						text={sentToken ? 'Verify' : 'Send Token'}
						large={true}
					/>
				</div>
			</form>
		</div>
	)
}

const { func, bool, string, object } = PropTypes

PasswordResetForm.propTypes = {
	loading: bool,
	handleSubmit: func.isRequired,
	sentToken: bool
}

const mapStateToProps = (state) => ({
	err: state.loginReducer.err
})

PasswordResetForm = reduxForm({
	form: 'passwordResetForm'
})(PasswordResetForm)

export default withRouter(connect(mapStateToProps)(PasswordResetForm))
