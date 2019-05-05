import React from 'react'
import PropTypes from 'prop-types'
import { Spinner, Intent, H4 } from '@blueprintjs/core'
import './style.scss'

const Loading = (props) => {
	const { size = 50 } = props

	if (props.error) {
		return (
			<div>
				Error! <button onClick={props.retry}>Retry</button>
			</div>
		)
	} else if (props.timedOut) {
		return (
			<div>
				Taking a long time... <button onClick={props.retry}>Retry</button>
			</div>
		)
	} else if (props.pastDelay) {
		return (
			<div className="alt-loader">
				<Spinner intent={Intent.PRIMARY} size={size} />
				<br />
				<H4>Loading ...</H4>
			</div>
		)
	} else {
		return null
	}
}

const { number, string, func, bool, object } = PropTypes

Loading.propTypes = {
	size: number,
	error: object,
	pastDelay: bool,
	retry: func
}
export default Loading
