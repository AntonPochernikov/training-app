import { Field, InputType } from 'type-graphql'

@InputType()
export class GetQuestionInput {
    @Field()
    limit: number
}
