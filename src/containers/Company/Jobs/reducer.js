import { JOBS, JOBS_ERROR, CLEAR_JOBS_ERROR } from './types'

const initialState = {
	jobPosted: false,
	err: '',
	message: ''
}

const jobsReducer = (state = initialState, action) => {
	switch (action.type) {
		case JOBS:
			return {
				...state,
				jobPosted: true,
				message: action.payload.message
			}
		case JOBS_ERROR:
			return {
				...state,
				err: action.payload.err
			}
		case CLEAR_JOBS_ERROR:
			return {
				...state,
				err: ''
			}
		default:
			return state
	}
}

export default jobsReducer
