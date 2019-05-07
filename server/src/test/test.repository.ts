import { EntityRepository, Repository, getRepository } from 'typeorm'
import { Test } from './test.schema'
import { IQuestionPayload } from 'src/question/question.schema'
import { TestToQuestion } from 'src/joins/TestToQuestion.schema'

@EntityRepository(Test)
export class TestRepository extends Repository<Test> {
    async getQuestionsById(id: number): Promise<IQuestionPayload[]> {
        try {
            const testToQuestionRepo = getRepository(TestToQuestion)

            const questions: any = await testToQuestionRepo
                .createQueryBuilder('ttq')
                .leftJoin('ttq.question', 'question')
                .addSelect('question.id')
                .addSelect('question.title')
                .addSelect('question.text')
                .leftJoin('ttq.test', 'test')
                .where('test.id = :id', { id })
                .getMany()

            return questions.map(q => q.question)
        } catch (err) {
            throw new Error(err)
        }
    }
}
