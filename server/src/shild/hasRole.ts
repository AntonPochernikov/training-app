import { rule } from 'graphql-shield'
import jsonwebtoken from 'jsonwebtoken'
import { jsonToken } from 'src/Jwt'

export const hasRole = allowedRoles =>
    rule(`has-role-${allowedRoles}`)(async (parent, args, context, info) => {
        const { authorization } = context.req.headers
        const token = authorization.replace('Bearer ', '')
        console.log(token)
        console.log(allowedRoles)

        try {
            const { role }: any = jsonwebtoken.verify(token, jsonToken.secret)
            console.log(role)
            console.log(allowedRoles.includes(role))
            return allowedRoles.includes(role)
        } catch {
            return false
        }
    })
