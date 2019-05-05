import React from 'react'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { FormGroup, TagInput, Label } from '@blueprintjs/core'

import './style.scss'
import { AltField } from '../../UIComponents/InputTypes'
import { AltTextArea } from '../../UIComponents/TextArea'
import { AltButton } from '../../UIComponents/Button'
import { AltRadioField } from '../../UIComponents/RadioType'

let JobDetails = ({ handleSubmit, front, back }) => {
	const onButtonSubmit = async (event) => {
		event.preventDefault()
		if (event.target.id === 'next') {
			await handleSubmit()
		} else if (event.target.id === 'prev') {
			await back()
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit} className="alt-form">
				<div className="alt-form-title">
					<h3>Update your profile</h3>
				</div>
				<div className="alt-radio-btn">
					<h4>Select Primary Profile</h4>
					<Field
						name="title"
						type="text"
						component={AltField}
						label="Job Title"
						placeholder="Place one appropiate Job Title"
					/>
					<Field
						name="location"
						type="text"
						component={AltField}
						label="Job Location"
						placeholder="Enter the Job Locatiion"
					/>
					<Field name="salary" type="number" component={AltField} label="Slaray" placeholder="Salary(in lakhs/annum)" />
					<Field
						name="openings"
						type="number"
						component={AltField}
						label="No. Of Openings"
						placeholder="Total No. of Openings"
					/>
					<div className="alt-two-form-field">
						<Field
							name="profile"
							component={AltRadioField}
							type="radio"
							value="Business Development"
							label="Business Development"
						/>
						<Field
							name="profile"
							component={AltRadioField}
							type="radio"
							value="Graphic Design"
							label="Graphic Design"
						/>
					</div>
					<div className="alt-two-form-field">
						<Field
							name="profile"
							component={AltRadioField}
							type="radio"
							value="Web Development"
							label="Web Development"
						/>
						<Field
							name="profile"
							component={AltRadioField}
							type="radio"
							value="Content Writing"
							label="Content Writing"
						/>
					</div>
					<div className="alt-two-form-field">
						<Field
							name="profile"
							component={AltRadioField}
							type="radio"
							value="Social Media Marketing"
							label="Social Media Marketing"
						/>
						<Field name="profile" component={AltRadioField} type="radio" value="Marketing" label="Marketing" />
					</div>
					<div className="alt-two-form-field">
						<Field name="profile" component={AltRadioField} type="radio" value="Operations" label="Operations" />
						<Field
							name="profile"
							component={AltRadioField}
							type="radio"
							value="Mobile App Development"
							label="Mobile App Development"
						/>
					</div>
					<div className="alt-two-form-field">
						<Field
							name="profile"
							component={AltRadioField}
							type="radio"
							value="Digital Marketing"
							label="Digital Marketing"
						/>
						<Field
							name="profile"
							component={AltRadioField}
							type="radio"
							value="Human Resoources"
							label="Human Resoources (HR)"
						/>
					</div>
					<div className="alt-two-form-field">
						<Field name="profile" component={AltRadioField} type="radio" value="Law Legal" label="Law Legal" />
						<Field
							name="profile"
							component={AltRadioField}
							type="radio"
							value="Campus Ambassador"
							label="Campus Ambassador"
						/>
					</div>
				</div>
				<div className="alt-two-form-field">
					<AltButton text="prev" id="prev" large={true} onClick={onButtonSubmit} />
					<AltButton text="Create Job" id="next" large={true} onClick={onButtonSubmit} />
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => ({
	err: state.loginReducer.err
})

JobDetails = reduxForm({
	form: 'jobForm'
})(JobDetails)

export default withRouter(connect(mapStateToProps)(JobDetails))
