import { Question } from './question.schema'
import { Repository, EntityRepository, createQueryBuilder, getRepository } from 'typeorm'
import { QuestionToAnswer } from 'src/joins/QuestionToAnswer.schema'

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
    async getAnswerByid(id: number) {
        const questionToAnswer = getRepository(QuestionToAnswer)
        const answer = await questionToAnswer.find({ where: { questionId: id } })

        console.log(answer)
    }
}
