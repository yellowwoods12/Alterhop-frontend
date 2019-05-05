import { LOGIN, LOGIN_ERROR, LOGOUT, CLEAR_LOGIN_ERR } from './types'

const initialState = {
	token: null,
	loggedIn: false,
	err: '',
	message: '',
	type: ''
}
const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				token: action.payload.token,
				loggedIn: true,
				type: action.payload.type,
				message: action.payload.message,
				type: action.payload.type
			}
		case LOGOUT:
			localStorage.removeItem('token')
			return {
				...state,
				token: '',
				loggedIn: false,
				type: ''
			}
		case LOGIN_ERROR:
			return {
				...state,
				err: action.payload.err
			}
		case CLEAR_LOGIN_ERR:
			return {
				...state,
				err: ''
			}
		default:
			return state
	}
}

export default loginReducer
