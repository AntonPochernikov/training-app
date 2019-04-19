import { GraphQLError } from 'graphql'

export class ValidationError extends GraphQLError {
    state: any
    constructor(errors) {
        super('The input data is incorrect.')
        this.state = errors.map(error => {
            return error
        }, {})
    }
}
