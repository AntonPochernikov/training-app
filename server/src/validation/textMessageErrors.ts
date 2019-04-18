import { string } from 'yup'
export const emailText = () =>
    string()
        .required('Email field is required')
        .email('Email must be valid')

export const passwordText = () =>
    string()
        .required('Password field is required')
        .min(6, 'The minimum password length must be 6')

export const firstNameText = () => string().required('Firstname field is required')

export const lastNameText = () => string().required('Lastname field is required')

export const nickNameText = () => string().required('Nickname field is required')
