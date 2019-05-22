import {
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    JoinColumn,
} from 'typeorm'
import { Question } from 'src/question/question.schema'
import { Test } from 'src/test/test.schema'

@Entity()
export class TestToQuestion extends BaseEntity {
    @PrimaryGeneratedColumn()
    readonly id: number

    @ManyToOne(() => Question, question => question.id)
    @JoinColumn()
    readonly question: number

    @ManyToOne(() => Test, test => test.id)
    @JoinColumn()
    readonly test: number
}
