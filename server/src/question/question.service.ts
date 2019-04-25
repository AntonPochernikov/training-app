import { Injectable } from '@nestjs/common'
import { QuestionRepository } from './question.repository'
import { InjectRepository } from '@nestjs/typeorm'
import { Question } from './question.schema'
import { CreateQuestion } from './types/inputs'
import { Answer } from 'src/answer/answer.schema'

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(QuestionRepository)
        private readonly questionRepository: QuestionRepository,
    ) {}

    async getQuestions(): Promise<Question[]> {
        try {
            return await this.questionRepository.find()
        } catch (err) {
            throw new Error(err)
        }
    }

    async createQuestion(data: CreateQuestion): Promise<Question> {
        try {
            return await this.questionRepository.create(data).save()
        } catch (err) {
            throw new Error(err)
        }
    }

    async getAnswer(id: number): Promise<Answer[]> {
        return await this.questionRepository.getAnswersByQuestionId(id)
    }

    async getRightAnswers(questionId: number): Promise<number[]> {
        return await this.questionRepository.getRightAnswersByQuestionId(questionId)
    }
}
