import { registerEnumType } from 'type-graphql'

export enum UserRole {
    Admin = 1,
    User = 2,
}

registerEnumType(UserRole, {
    name: 'UserRole',
})
