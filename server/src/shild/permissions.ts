import { shield } from 'graphql-shield'
import { hasRole } from './hasRole'

const admin = [`Admin`]
const adminUser = [`Admin`, 'User']
export const permissions = shield({
    Query: {
        tests: hasRole(adminUser),
    },
    Mutation: {
        createQuestion: hasRole(admin),
    },
})
