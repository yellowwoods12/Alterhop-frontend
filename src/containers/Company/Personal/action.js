import axios from 'axios'
import { COMP_PROF, COMP_PROF_ERROR, CLEAR_COMP_PROF_ERROR, FETCH_PROF } from './types'

export const compProf = (payload) => ({
	type: COMP_PROF,
	payload
})

export const compProfError = (payload) => ({
	type: COMP_PROF_ERROR,
	payload
})

const fetchProfileValue = (payload) => ({
	type: FETCH_PROF,
	payload
})

export const updateProfile = (values, url) => (dispatch) => {
	const token = localStorage.getItem('token')
	const headers = {
		'Content-Type': 'application/json',
		authorization: token
	}
	return axios
		.put(url, values, { headers })
		.then((res) => {
			if (res.status === 200) {
				dispatch(compProf(res.data))
			} else {
				dispatch(compProfError({ err: res.data.message }))
			}
		})
		.catch((err) => {
			const re = /40\d/
			if (re.test(err.response.status)) {
				dispatch(compProfError({ err: err.response.data.message }))
			} else {
				dispatch(compProfError({ err: err.message }))
			}
		})
}

export const fetchProfile = () => (dispatch) => {
	const token = localStorage.getItem('token')
	const headers = {
		'Content-Type': 'application/json',
		authorization: token
	}
	return axios
		.get('https://api.alterhop.com/api/v1/company/member/profile', { headers })
		.then((res) => {
			// if(res.status === 304 || res.data.message)
			dispatch(fetchProfileValue({ user: res.data }))
		})
		.catch((err) => {
			const re = /40\d/
			if (re.test(err.response.status)) {
				dispatch(compProfError({ err: err.response.data.message }))
			} else {
				dispatch(compProfError({ err: err.message }))
			}
		})
}

export const clearCompProfError = () => {
	return {
		type: CLEAR_COMP_PROF_ERROR
	}
}
