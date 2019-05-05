import axios from 'axios'
import { SIGNUP, SIGNUP_ERR, CLEAR_SIGNUP_ERR } from './types'

export const signup = (payload) => ({
	type: SIGNUP,
	payload
})

export const signupError = (payload) => ({
	type: SIGNUP_ERR,
	payload
})

export const clearSignupError = () => {
	return {
		type: CLEAR_SIGNUP_ERR
	}
}

export const postSignup = (values, url) => (dispatch) => {
	return axios
		.post(url, values)
		.then((res) => {
			if (res.status === 201) {
				dispatch(signup({ message: res.data.message }))
			} else {
				dispatch(signupError({ err: res.data.message }))
			}
		})
		.catch((err) => {
			const re = /40\d/
			if (re.test(err.response.status)) {
				dispatch(signupError({ err: err.response.data.message }))
			} else {
				dispatch(signupError({ err: err.message }))
			}
		})
}
