import { FETCH_USERS, UPDATE_USERS, USERS_ERROR, USERS_CLEAR_ERR } from './types'
import axios from 'axios'

const fetchUsers = (payload) => ({
	type: FETCH_USERS,
	payload
})

const updateUsers = (payload) => ({
	type: UPDATE_USERS,
	payload
})

const usersError = (payload) => ({
	type: USERS_ERROR,
	payload
})

export const userClearErr = () => ({
	type: USERS_CLEAR_ERR
})

export const fetchUser = () => (dispatch) => {
	const token = localStorage.getItem('token')
	const headers = {
		'Content-Type': 'application/json',
		authorization: token
	}
	return axios.get('https://api.alterhop.com/api/v1/user', { headers }).then((res) => {
		// if(res.status === 304 || res.data.message)
		dispatch(fetchUsers(res.data))
	})
}

export const updateUser = (values) => (dispatch) => {
	const token = localStorage.getItem('token')
	const headers = {
		'Content-Type': 'application/json',
		authorization: token
	}
	return axios
		.post('https://api.alterhop.com/api/v1/user/update', values, { headers })
		.then((res) => {
			if (res.status === 201) {
				dispatch(updateUsers(res.data))
			} else {
				dispatch(usersError({ err: res.data.message }))
			}
		})
		.catch((err) => {
			const re = /40\d/
			if (re.test(err.response.status)) {
				// dispatch(usersError({ err: err.response.data.message }))
			} else {
				dispatch(usersError({ err: err.message }))
			}
		})
}
