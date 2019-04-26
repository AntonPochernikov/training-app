import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql'
import { Answer } from 'src/answer/answer.schema'
import { Question } from './question.schema'
import { QuestionService } from './question.service'
import { CreateQuestion, GetQuestionInput } from './types/inputs'
import { createQuestionValidation } from './types/validation/createQuestion.validation'

@Resolver(() => Question)
export class QuestionResolver {
    constructor(private readonly questionService: QuestionService) {}

    @Query(() => [Question])
    async questions(@Args('data') data: GetQuestionInput) {
        const { limit } = data
        return this.questionService.getQuestions(limit)
    }

    @Query(() => Question)
    async getQuestionById(@Args('id') id: number): Promise<Question> {
        return await this.questionService.getQuestionById(id)
    }

    @Mutation(() => Question)
    async createQuestion(@Args('data') data: CreateQuestion): Promise<Question> {
        await createQuestionValidation(data)
        return this.questionService.createQuestion(data)
    }

    @ResolveProperty()
    async answers(@Parent() question: Question): Promise<Answer[]> {
        const { id } = question
        return await this.questionService.getAnswer(id)
    }

    @ResolveProperty()
    async rightAnswersId(@Parent() { id }: Question): Promise<number[]> {
        return await this.questionService.getRightAnswers(id)
    }
}
