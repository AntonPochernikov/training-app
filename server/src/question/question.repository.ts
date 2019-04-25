import { Answer } from 'src/answer/answer.schema'
import { QuestionToAnswer } from 'src/joins/QuestionToAnswer.schema'
import { EntityRepository, getRepository, Repository } from 'typeorm'
import { Question } from './question.schema'

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
    async getAnswersByQuestionId(idQ: number): Promise<Answer[]> {
        const questionToAnswerRepo = getRepository(QuestionToAnswer)

        const answers: any = await questionToAnswerRepo
            .createQueryBuilder('qta')
            .leftJoin('qta.answer', 'answer')
            .where('qta.question = :id', { id: idQ })
            .select('qta.id')
            .addSelect('answer.id')
            .addSelect('answer.text')
            .getMany()

        return answers.map(element => {
            return element.answer
        })
    }
}
