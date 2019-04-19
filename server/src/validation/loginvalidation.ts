import { UserLoginInput } from 'src/user/types/inputs'
import { object } from 'yup'
import { inputErrors } from './errorInput/inputError'
import { ValidationError } from './errorInput/ValidationError'
import { emailText, passwordText } from './textMessageErrors'

export const loginvalidation = async (data: UserLoginInput) => {
    const schemaValidation = await object().shape({
        email: emailText(),
        password: passwordText(),
    })

    try {
        await schemaValidation.validate(data, { abortEarly: false })
    } catch (err) {
        throw new ValidationError(inputErrors(err))
    }
}
