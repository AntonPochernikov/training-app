import { Module } from '@nestjs/common'
import { Question } from './question.schema'
import { QuestionRepository } from './question.repository'
import { QuestionService } from './question.service'
import { QuestionResolver } from './question.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [TypeOrmModule.forFeature([Question, QuestionRepository])],
    providers: [QuestionService, QuestionResolver],
})
export class QuestionModule {}
