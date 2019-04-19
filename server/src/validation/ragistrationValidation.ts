import { UserRegistrationInput } from 'src/user/types/inputs'
import { object } from 'yup'
import { inputErrors } from './errorInput/inputError'
import { ValidationError } from './errorInput/ValidationError'
import {
    emailText,
    firstNameText,
    lastNameText,
    nickNameText,
    passwordText,
} from './textMessageErrors'

export const registrationValidation = async (data: UserRegistrationInput) => {
    const schemaValidation = await object().shape({
        email: emailText(),
        password: passwordText(),
        nickName: nickNameText(),
        lastName: lastNameText(),
        firstName: firstNameText(),
    })

    try {
        await schemaValidation.validate(data, { abortEarly: false })
    } catch (err) {
        throw new ValidationError(inputErrors(err))
    }
}
