import { shield } from 'graphql-shield'
import { hasRole } from './hasRole'
import { UserRole } from 'src/enums'

export const permissions = shield({
    Mutation: {
        createQuestion: hasRole([UserRole.Admin]),
    },
})
