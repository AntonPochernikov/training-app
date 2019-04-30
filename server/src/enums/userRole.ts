import { registerEnumType } from 'type-graphql'

export enum UserRole {
    Admin,
    User,
}

registerEnumType(UserRole, {
    name: 'UserRole',
})
