import { string } from 'yup'
export const emailText = () =>
    string()
        .required('Email field is required')
        .email('Email must be valid')

export const passwordText = () =>
    string()
        .min(6, 'The minimum password length must be 6')
        .required('Password field is required')
