import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TestRepository } from './test.repository'

@Injectable()
export class TestService {
    constructor(
        @InjectRepository(TestRepository)
        private readonly testRepository: TestRepository,
    ) {}

    async getQuestions(id: number): Promise<any> {
        try {
            return await this.testRepository.getQuestionsById(id)
        } catch (err) {
            throw new Error(err)
        }
    }

    async getTestsByLimit(limit: number) {
        return await this.testRepository.find({ take: limit })
    }
}
