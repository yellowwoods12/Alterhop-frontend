export const required = (value) => (value || typeof value === 'number' ? undefined : 'Required')

export const maxLength = (max) => (value) =>
	value && value.length > max ? `Must be ${max} character or less` : undefined

export const minLength = (min) => (value) =>
	value && value.length < min ? `Must be ${min} character or more` : undefined

export const email = (value) =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined

export const alphaNumeric = (value) =>
	value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined

export const phoneNumber = (value) =>
	value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined

export const password = (value) =>
	value && /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(value)
		? 'Invalid password format'
		: undefined
