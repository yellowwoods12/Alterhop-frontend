import { FETCH_USERS, USERS_ERROR, UPDATE_USERS, USERS_CLEAR_ERR } from './types'

const initialState = {
	user: {},
	err: ''
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return {
				...state,
				user: action.payload.user
			}
		case UPDATE_USERS:
			return {
				...state,
				user: action.payload.user
			}
		case USERS_ERROR:
			return {
				...state,
				err: action.payload.err
			}
		case USERS_CLEAR_ERR:
			return {
				...state,
				err: ''
			}
		default:
			return state
	}
}

export default userReducer
