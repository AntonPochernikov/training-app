import { string } from 'yup'
export const titleMessageError = () =>
    string()
        .required('Title field is required')
        .min(5, 'The minimum title length must be 5')

export const textMessageError = () =>
    string()
        .required('Title field is required')
        .min(8, 'The minimum title length must be 8')

export const questionLevelMessageError = () =>
    string().required('Question level field is required')
