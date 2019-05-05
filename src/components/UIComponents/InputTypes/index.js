import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, InputGroup, Intent } from '@blueprintjs/core'

const AltField = ({
	disabled = false,
	classes = '',
	placeholder,
	label,
	type = 'text',
	input,
	meta: { touched, error, warning }
}) => (
	<FormGroup label={label} labelFor={input.name} className="alt-input">
		<InputGroup
			disabled={disabled}
			autoComplete="off"
			className={`alt-input-group ${classes}`}
			{...input}
			intent={touched ? (error ? Intent.DANGER : Intent.PRIMARY) : Intent.PRIMARY}
			placeholder={placeholder}
			type={type}
		/>
		{touched && ((error && <span className="alt-form-error">{error}</span>) || (warning && <span>{warning}</span>))}
	</FormGroup>
)

const { bool, string, object } = PropTypes

AltField.propTypes = {
	disabled: bool,
	classes: string,
	placeholder: string,
	label: string,
	type: string,
	input: object.isRequired,
	meta: object.isRequired
}

export { AltField }
