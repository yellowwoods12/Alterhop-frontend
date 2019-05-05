import axios from 'axios'
import { JOBS, JOBS_ERROR, CLEAR_JOBS_ERROR } from './types'

export const jobs = (payload) => ({
	type: JOBS,
	payload
})

export const jobsError = (payload) => ({
	type: JOBS_ERROR,
	payload
})

export const postJob = (values, url) => (dispatch) => {
	const token = localStorage.getItem('token')
	const headers = {
		'Content-Type': 'application/json',
		authorization: token
	}
	return axios
		.post(url, values, { headers })
		.then((res) => {
			if (res.status === 200) {
				dispatch(jobs(res.data))
			} else {
				dispatch(jobsError({ err: res.data.message }))
			}
		})
		.catch((err) => {
			const re = /40\d/
			if (re.test(err.response.status)) {
				dispatch(jobsError({ err: err.response.data.message }))
			} else {
				dispatch(jobsError({ err: err.message }))
			}
		})
}

export const clearJobError = () => {
	return {
		type: CLEAR_JOBS_ERROR
	}
}
