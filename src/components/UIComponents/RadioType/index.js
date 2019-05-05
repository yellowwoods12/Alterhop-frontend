import React from 'react'
import PropTypes from 'prop-types'
import { Label, Radio, RadioGroup, Intent, Classes } from '@blueprintjs/core'

const AltRadioField = ({ disabled = false, classes = '', value, label, input, meta: { touched, error, warning } }) => (
	<div className="alt-input alt-radio">
		<input type="radio" value={value} {...input} />
		<Label>{label}</Label>
		{touched && ((error && <span className="alt-form-error">{error}</span>) || (warning && <span>{warning}</span>))}
	</div>
)

const { bool, string, object } = PropTypes

AltRadioField.propTypes = {
	disabled: bool,
	classes: string,
	value: string,
	label: string,
	input: object.isRequired,
	meta: object.isRequired
}

export { AltRadioField }
