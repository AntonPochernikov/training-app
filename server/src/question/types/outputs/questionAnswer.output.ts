import { ObjectType, Field } from 'type-graphql'
import { Answer } from 'src/answer/answer.schema'

@ObjectType()
export class QuestionAnswerOutput {
    @Field()
    answers: Answer[]
}
