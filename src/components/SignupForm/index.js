import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReCAPTCHA from 'react-google-recaptcha'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Divider, FormGroup } from '@blueprintjs/core'

import logo from '../StaticHomepage/images/AlterhopLogo-2.png'
import { AltField } from '../UIComponents/InputTypes'
import { AltButton } from '../UIComponents/Button'
import { required, email, password, alphaNumeric } from '../UIComponents/validate'
const TEST_SITE_KEY = '6LfY2X8UAAAAAMY7vxlO5ZmKTDHa91HDWsIoHsh8'

class SignupForm extends PureComponent {
	_reCaptchaRef = React.createRef()

	state = {
		disabled: true
	}

	onChange = (value) => {
		if (value) {
			this.setState({
				disabled: false
			})
		}
	}
	render() {
		const { handleSubmit, loading } = this.props
		return (
			<div>
				<form onSubmit={handleSubmit} className="alt-form">
					<div className="alt-form-title">
						<h3>Signup to get started</h3>
						<img src={logo} title="alterhop" alt="alterhop" />
					</div>
					<div className="alt-two-form-field">
						<Field
							name="firstname"
							type="text"
							component={AltField}
							label="firstname"
							validate={[required, alphaNumeric]}
							placeholder="Enter your firstname"
						/>
						<Field
							name="lastname"
							type="text"
							component={AltField}
							label="lastname"
							validate={[required, alphaNumeric]}
							placeholder="Enter your lastname"
						/>
					</div>
					{this.props.proftype === 'student' && (
						<Field
							name="email"
							type="email"
							component={AltField}
							label="email"
							validate={[required, email]}
							placeholder="Enter your email"
						/>
					)}
					{this.props.proftype === 'company' && (
						<Field
							name="email"
							type="email"
							component={AltField}
							label="Company Email"
							validate={[required, email]}
							placeholder="Enter your Company Email"
						/>
					)}
					<Field
						name="username"
						type="username"
						component={AltField}
						label="username"
						validate={[required, alphaNumeric]}
						placeholder="Enter your username"
					/>
					<Field
						component={AltField}
						label="password"
						name="password"
						placeholder="Enter your password"
						type="password"
						validate={[required, password]}
						id="password"
					/>
					<FormGroup className="alt-input">
						<ReCAPTCHA
							style={{ display: 'inline-block' }}
							theme="light"
							ref={this._reCaptchaRef}
							sitekey={TEST_SITE_KEY}
							onChange={this.onChange}
						/>
					</FormGroup>
					<div className="alt-form-btn">
						<AltButton
							disabled={loading || this.state.disabled}
							loading={loading}
							type="submit"
							text="submit"
							large={true}
						/>
					</div>
					<div className="alt-form-divider">
						<Divider />
						<p>or else login to continue ...</p>
						<Link to="/login">
							<AltButton rightIcon="arrow-right" intent="success" text="login" large={true} />
						</Link>
					</div>
				</form>
			</div>
		)
	}
}

const { func, bool, string } = PropTypes

SignupForm.propTypes = {
	loading: bool,
	handleSubmit: func.isRequired,
	proftype: string
}

const mapStateToProps = (state) => ({
	err: state.loginReducer.err
})

SignupForm = reduxForm({
	form: 'signupForm'
})(SignupForm)

export default withRouter(connect(mapStateToProps)(SignupForm))
