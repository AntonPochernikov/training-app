import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TestRepository } from './test.repository'
import { Test } from './test.schema'

@Injectable()
export class TestService {
    constructor(
        @InjectRepository(TestRepository)
        private readonly testRepository: TestRepository,
    ) {}

    async getQuestion(): Promise<Test[]> {
        try {
            return await this.testRepository.find()
        } catch (err) {
            throw new Error(err)
        }
    }
}
