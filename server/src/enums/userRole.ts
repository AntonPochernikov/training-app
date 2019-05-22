import { registerEnumType } from 'type-graphql'

export enum UserRoleToNumber {
    Admin = 1,
    User = 2,
}

export enum UserRole {
    Admin = 'Admin',
    User = 'User',
}

registerEnumType(UserRoleToNumber, {
    name: 'UserRole',
})
