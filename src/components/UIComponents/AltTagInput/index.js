import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, TagInput, Intent } from '@blueprintjs/core'

const AltTagInput = ({
	disabled = false,
	classes = '',
	placeholder,
	label,
	input,
	meta: { touched, error, warning }
}) => (
	<FormGroup label={label} labelFor={input.name} className="alt-input">
		<TagInput
			values={[]}
			disabled={disabled}
			intent={touched ? (error ? Intent.DANGER : Intent.PRIMARY) : Intent.PRIMARY}
			className={`alt-input-group alt-blue-border-input ${classes}`}
			placeholder={placeholder}
			{...input}
		/>
		{touched && ((error && <span className="alt-form-error">{error}</span>) || (warning && <span>{warning}</span>))}
	</FormGroup>
)

const { bool, string, object } = PropTypes

AltTagInput.propTypes = {
	disabled: bool,
	classes: string,
	placeholder: string,
	label: string,
	type: string,
	input: object.isRequired,
	meta: object.isRequired
}

export { AltTagInput }
