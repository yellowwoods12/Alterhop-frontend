import axios from 'axios'
import { ORG, ORG_ERROR, CLEAR_ORG_ERROR, FETCH_ORG } from './types'

export const org = (payload) => ({
	type: ORG,
	payload
})

export const orgError = (payload) => ({
	type: ORG_ERROR,
	payload
})

export const clearOrgError = () => ({
	type: CLEAR_ORG_ERROR
})

export const fetchCompanyValue = (payload) => ({
	type: FETCH_ORG,
	payload
})

export const postCompany = (values, url) => (dispatch) => {
	const token = localStorage.getItem('token')
	const headers = {
		'Content-Type': 'application/json',
		authorization: token
	}
	return axios
		.post(url, values, { headers })
		.then((res) => {
			if (res.status === 201) {
				dispatch(org(res.data))
			} else {
				dispatch(orgError({ err: res.data.message }))
			}
		})
		.catch((err) => {
			const re = /40\d/
			if (re.test(err.response.status)) {
				dispatch(orgError({ err: err.response.data.message }))
			} else {
				dispatch(orgError({ err: err.message }))
			}
		})
}

export const fetchCompany = () => (dispatch) => {
	const token = localStorage.getItem('token')
	const headers = {
		'Content-Type': 'application/json',
		authorization: token
	}
	return axios
		.get('https://api.alterhop.com/api/v1/company/profile', { headers })
		.then((res) => {
			// if(res.status === 304 || res.data.message)
			dispatch(fetchCompanyValue({ company: res.data }))
		})
		.catch((err) => {
			const re = /40\d/
			if (re.test(err.response.status)) {
				dispatch(orgError({ err: err.response.data.message }))
			} else {
				dispatch(orgError({ err: err.message }))
			}
		})
}
