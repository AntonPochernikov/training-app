import { ObjectType, Field } from 'type-graphql'
import { User } from 'src/user/user.schema'

@ObjectType()
export class UserLoginOutput {
    @Field()
    user: User
    @Field()
    accessToken: string
}
