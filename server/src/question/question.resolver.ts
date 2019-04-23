import { Question } from './question.schema'
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { QuestionService } from './question.service'
import { CreateQuestion } from './types/inputs'
import { createQuestionValidation } from './types/validation/createQuestion.validation'

@Resolver(() => Question)
export class QuestionResolver {
    constructor(private readonly questionService: QuestionService) {}

    @Query(() => [Question])
    async questions() {
        return this.questionService.getQuestions()
    }

    @Mutation(() => Question)
    async createQuestion(@Args('data') data: CreateQuestion): Promise<Question> {
        await createQuestionValidation(data)
        return this.questionService.createQuestion(data)
    }
}
