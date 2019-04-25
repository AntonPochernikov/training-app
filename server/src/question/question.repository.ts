import { Answer } from 'src/answer/answer.schema'
import { QuestionToAnswer } from 'src/joins/QuestionToAnswer.schema'
import { EntityRepository, getRepository, Repository } from 'typeorm'
import { Question } from './question.schema'

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
    // constructor()
    async getAnswersByQuestionId(idQ: number): Promise<Answer[]> {
        try {
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
        } catch (err) {
            throw new Error(err)
        }
    }

    async getRightAnswersByQuestionId(idQ: number): Promise<number[]> {
        try {
            const questionToAnswerRepo = getRepository(QuestionToAnswer)

            const rightAnswers = await questionToAnswerRepo.find({
                where: {
                    isRight: true,
                    question: idQ,
                },
            })

            return rightAnswers.map(answer => {
                return answer.id
            })
        } catch (err) {
            throw new Error(err)
        }
    }
}
