import { Question } from './question.schema'
import { Repository, EntityRepository } from 'typeorm'

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {}
