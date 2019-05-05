import { UPDATE_PROFILE, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS } from './types'

export const updateProfile = () => ({
	type: UPDATE_PROFILE
})

export const updateProfileError = () => ({
	type: UPDATE_PROFILE_ERROR
})

export const updateProfileSuccess = () => ({
	type: UPDATE_PROFILE_SUCCESS
})
