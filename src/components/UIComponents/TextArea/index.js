import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, TextArea, Intent } from '@blueprintjs/core'

const AltTextArea = ({
	disabled = false,
	classes = '',
	placeholder,
	label,
	input,
	meta: { touched, error, warning }
}) => (
	<FormGroup label={label} labelFor={input.name} className="alt-input">
		<TextArea
			large={true}
			intent={touched ? (error ? Intent.DANGER : Intent.PRIMARY) : Intent.PRIMARY}
			disabled={disabled}
			autoComplete="off"
			className={`bp3-fill alt-input-group ${classes}`}
			{...input}
			placeholder={placeholder}
		/>
		{touched && ((error && <span className="alt-form-error">{error}</span>) || (warning && <span>{warning}</span>))}
	</FormGroup>
)

const { bool, string, object } = PropTypes

AltTextArea.propTypes = {
	disabled: bool,
	classes: string,
	placeholder: string,
	label: string,
	type: string,
	input: object.isRequired,
	meta: object.isRequired
}

export { AltTextArea }
