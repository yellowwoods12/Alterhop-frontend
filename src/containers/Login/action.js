import axios from 'axios'
import { LOGIN, LOGIN_ERROR, LOGOUT, CLEAR_LOGIN_ERR } from './types'

/**
 * [login reducer]
 * @param  {[Object]} payload [{ token: ''}]
 * @return {[reducer]}         [login reducer]
 */
export const login = (payload) => ({
	type: LOGIN,
	payload
})

/**
 * [loginError reducer]
 * @param  {[Object]} payload [{ err: 'some error'}]
 * @return {[reducer]}         [error reducer]
 */
export const loginError = (payload) => ({
	type: LOGIN_ERROR,
	payload
})

export const postLogin = (values, url, type) => (dispatch) => {
	return axios
		.post(url, values)
		.then((res) => {
			if (res.status === 200) {
				const data = res.data
				data.type = type
				dispatch(login(data))
			} else {
				dispatch(loginError({ err: res.data.message }))
			}
		})
		.catch((err) => {
			const re = /40\d/
			if (re.test(err.response.status)) {
				dispatch(loginError({ err: err.response.data.message }))
			} else {
				dispatch(loginError({ err: err.message }))
			}
		})
}

export const logout = () => {
	return {
		type: LOGOUT
	}
}

export const clearLoginError = () => {
	return {
		type: CLEAR_LOGIN_ERR
	}
}
