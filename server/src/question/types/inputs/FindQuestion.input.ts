import { Field, InputType } from 'type-graphql'

@InputType()
export class FindQuestionInput {
    @Field()
    id?: number
}
