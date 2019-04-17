import { Field, InputType } from 'type-graphql'

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
}
