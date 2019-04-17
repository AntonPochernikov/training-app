import { ObjectType, Field } from 'type-graphql'
import { User } from 'src/user/user.schema'

@ObjectType()
export class UserRegistrationOutput {
    @Field()
    user: User
    @Field()
    accessToken: string
}
