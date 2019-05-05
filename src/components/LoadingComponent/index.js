import React from 'react'
import PropTypes from 'prop-types'
import { Spinner, Intent } from '@blueprintjs/core'
import './style.scss'

const Loading = (props) => {
	const { size = 50 } = props

	return (
		<div className="alt-loader">
			<Spinner intent={Intent.PRIMARY} size={size} />
		</div>
	)
}

const { number, string } = PropTypes

Loading.propTypes = {
	size: number,
	error: string
}
export default Loading
