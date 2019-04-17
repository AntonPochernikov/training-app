import { rule } from 'graphql-shield'
import jsonwebtoken from 'jsonwebtoken'
import { jsonToken } from 'src/Jwt'

export const hasRole = allowedRoles =>
    rule(`has-role-${allowedRoles}`)(async (parent, args, context, info) => {
        const { authorization } = context.req.headers
        const token = authorization.replace('Bearer ', '')

        try {
            const { role }: any = jsonwebtoken.verify(token, jsonToken.secret)
            return allowedRoles.includes(role)
        } catch {
            return false
        }
    })
