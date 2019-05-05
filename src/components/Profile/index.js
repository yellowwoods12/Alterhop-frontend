import React from 'react'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { FormGroup, TagInput } from '@blueprintjs/core'
import './style.scss'

import { AltField } from '../UIComponents/InputTypes'
// import { AltTagInput } from '../UIComponents/AltTagInput'
import { AltButton } from '../UIComponents/Button'

let Profile = ({
	technical,
	onTechnicalChange,
	quant,
	onQuantChange,
	internships,
	onInternshipsChange,
	handleSubmit,
	loading
}) => {
	const onKeyPress = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault() //<===== This stops the form from being submitted
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit} className="alt-form" onKeyPress={onKeyPress}>
				<div className="alt-form-title">
					<h3>Update your profile</h3>
				</div>
				<Field
					disabled={true}
					name="email"
					type="email"
					component={AltField}
					label="email"
					placeholder="Enter your email"
				/>
				<Field
					disabled={true}
					name="username"
					type="username"
					component={AltField}
					label="username"
					placeholder="Enter your username"
				/>
				<div className="alt-two-form-field">
					<Field
						disabled={true}
						name="firstname"
						type="text"
						component={AltField}
						label="firstname"
						placeholder="Enter your firstname"
					/>
					<Field
						disabled={true}
						name="lastname"
						type="text"
						component={AltField}
						label="lastname"
						placeholder="Enter your lastname"
					/>
				</div>
				<div className="alt-two-form-field">
					<Field name="branch" type="text" component={AltField} label="branch" placeholder="Enter your Branch" />
					<Field name="cgpa" type="text" component={AltField} label="cgpa" placeholder="Enter your CGPA" />
				</div>
				<Field name="mobileno" type="text" component={AltField} label="mobileno" placeholder="Enter your mobileno" />
				<Field
					name="education"
					type="text"
					component={AltField}
					label="education"
					placeholder="Enter your latest college or school"
				/>
				<FormGroup label="technical" labelFor="technical" className="alt-input">
					<TagInput
						id="technical"
						values={technical}
						separator={/,/}
						className={'alt-input-group alt-blue-border-input'}
						placeholder="Enter technical skills and press Enter"
						onChange={onTechnicalChange}
					/>
				</FormGroup>
				<FormGroup label="quant" labelFor="quant" className="alt-input">
					<TagInput
						addOnBlur={true}
						id="quant"
						values={quant}
						className={'alt-input-group alt-blue-border-input'}
						placeholder="Enter technical skills and press Enter"
						onChange={onQuantChange}
					/>
				</FormGroup>
				<FormGroup label="internships" labelFor="internships" className="alt-input">
					<TagInput
						id="internships"
						values={internships}
						className={'alt-input-group alt-blue-border-input'}
						placeholder="Enter internships and press Enter"
						onChange={onInternshipsChange}
					/>
				</FormGroup>
				<div className="alt-form-btn">
					<AltButton disabled={loading} loading={loading} type="submit" text="Update" large={true} />
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => ({
	err: state.loginReducer.err
})

Profile = reduxForm({
	form: 'profileForm'
})(Profile)

export default withRouter(connect(mapStateToProps)(Profile))
