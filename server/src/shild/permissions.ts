import { shield } from 'graphql-shield'
import { hasRole } from './hasRole'
import { UserRole } from 'src/enums'

export const permissions = shield({
    Query: {
        tests: hasRole([UserRole.Admin, UserRole.User]),
    },
    Mutation: {
        createQuestion: hasRole([UserRole.Admin]),
    },
})
