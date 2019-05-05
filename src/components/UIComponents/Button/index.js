import React from 'react'
import PropTypes from 'prop-types'
import { Button, Intent } from '@blueprintjs/core'

const AltButton = ({ text, type = 'submit', large = true, disabled = false, loading = false, ...props }) => {
	return (
		<Button
			disabled={disabled}
			className="alt-button"
			text={text}
			type={type}
			large={large}
			loading={loading}
			intent={Intent.PRIMARY}
			{...props}
		/>
	)
}

const { bool, string } = PropTypes

AltButton.propTypes = {
	text: string,
	type: string,
	large: bool,
	disabled: bool,
	loading: bool
}
export { AltButton }
