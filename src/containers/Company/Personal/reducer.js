import { COMP_PROF, COMP_PROF_ERROR, CLEAR_COMP_PROF_ERROR, FETCH_PROF } from './types'

const initialState = {
	orgCreated: false,
	err: '',
	message: '',
	user: {}
}

const orgReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROF: {
			return {
				...state,
				user: action.payload.user
			}
		}
		case COMP_PROF:
			return {
				...state,
				orgCreated: true,
				message: action.payload.message
			}
		case COMP_PROF_ERROR:
			return {
				...state,
				err: action.payload.err
			}
		case CLEAR_COMP_PROF_ERROR:
			return {
				...state,
				err: ''
			}
		default:
			return state
	}
}

export default orgReducer
