import { ValidationError } from 'yup'
export const inputErrors = (err: ValidationError) => {
    const errors = []
    err.inner.forEach(error => {
        errors.push({
            path: error.path,
            message: error.message,
        })
    })
    return errors
}
