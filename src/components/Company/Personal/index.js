import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Divider } from '@blueprintjs/core'

import logo from '../../StaticHomepage/images/AlterhopLogo-2.png'
import { AltField } from '../../UIComponents/InputTypes'
import { AltButton } from '../../UIComponents/Button'
import { required, email, password, alphaNumeric } from '../../UIComponents/validate'

let PersonDetails = (props) => {
	const { handleSubmit } = props
	return (
		<div>
			<form onSubmit={handleSubmit} className="alt-form">
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
				<Field
					disabled={true}
					name="email"
					type="email"
					component={AltField}
					label="email"
					validate={[required, email]}
					placeholder="Enter your email"
				/>
				<Field name="mobileno" type="text" component={AltField} label="mobileno" placeholder="Enter your mobileno" />
				<div className="alt-form-btn">
					<AltButton type="submit" text="next" large={true} />
				</div>
			</form>
		</div>
	)
}

const { func, bool } = PropTypes

PersonDetails.propTypes = {
	loading: bool,
	handleSubmit: func.isRequired
}

const mapStateToProps = (state) => ({
	err: state.loginReducer.err
})

PersonDetails = reduxForm({
	form: 'personDetails'
})(PersonDetails)

export default withRouter(connect(mapStateToProps)(PersonDetails))
