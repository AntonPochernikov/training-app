import { Field, InputType } from 'type-graphql'

@InputType()
export class GetTestsInput {
    @Field()
    limit: number
}
