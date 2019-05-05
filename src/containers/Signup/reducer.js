import { SIGNUP, SIGNUP_ERR, CLEAR_SIGNUP_ERR } from './types'

const initialState = {
	err: '',
	message: ''
}
const signupReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGNUP:
			return {
				...state,
				message: action.payload.message
			}
		case SIGNUP_ERR:
			return {
				...state,
				err: action.payload.err
			}
		case CLEAR_SIGNUP_ERR:
			return {
				...state,
				err: '',
				message: ''
			}
		default:
			return state
	}
}

export default signupReducer
