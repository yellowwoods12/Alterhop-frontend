import React from 'react'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { FormGroup, TagInput } from '@blueprintjs/core'
import './style.scss'

import { AltField } from '../../UIComponents/InputTypes'
import { AltTextArea } from '../../UIComponents/TextArea'
import { AltButton } from '../../UIComponents/Button'

let OrganizationDetails = ({ handleSubmit, front, back }) => {
	const onButtonSubmit = async (event) => {
		event.preventDefault()
		if (event.target.id === 'next') {
			await handleSubmit()
			await front()
		} else if (event.target.id === 'prev') {
			await handleSubmit()
			await back()
		}
	}
	return (
		<div>
			<form onSubmit={onButtonSubmit} className="alt-form">
				<div className="alt-form-title">
					<h3>Update your profile</h3>
				</div>
				<Field
					name="name"
					type="text"
					component={AltField}
					label="Organization Name"
					placeholder="Enter your Organization Name"
				/>
				<Field
					name="description"
					component={AltTextArea}
					label="Organization Description"
					placeholder="Enter your Organization Description"
				/>
				<Field
					name="website"
					type="text"
					component={AltField}
					label="Website URL"
					placeholder="Enter your Organization website URL"
				/>
				<div className="alt-two-form-field">
					<AltButton text="prev" id="prev" large={true} onClick={onButtonSubmit} />
					<AltButton text="next" id="next" large={true} onClick={onButtonSubmit} />
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => ({
	err: state.loginReducer.err
})

OrganizationDetails = reduxForm({
	form: 'organizationForm'
})(OrganizationDetails)

export default withRouter(connect(mapStateToProps)(OrganizationDetails))
