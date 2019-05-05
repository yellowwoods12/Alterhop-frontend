import { ORG, ORG_ERROR, CLEAR_ORG_ERROR, FETCH_ORG } from './types'

const initialState = {
	orgCreated: false,
	err: '',
	message: '',
	company: {}
}

const orgReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ORG:
			return {
				...state,
				company: action.payload.company
			}
		case ORG:
			return {
				...state,
				orgCreated: true,
				message: action.payload.message
			}
		case ORG_ERROR:
			return {
				...state,
				err: action.payload.err
			}
		case CLEAR_ORG_ERROR:
			return {
				...state,
				err: ''
			}
		default:
			return state
	}
}

export default orgReducer
