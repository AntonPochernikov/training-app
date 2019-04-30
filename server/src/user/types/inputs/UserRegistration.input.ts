import { Field, InputType } from 'type-graphql'
import { UserRole } from 'src/enums'

@InputType()
export class UserRegistrationInput {
    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field()
    email: string

    @Field()
    password: string

    @Field()
    nickName: string

    @Field(() => UserRole)
    role: UserRole
}
