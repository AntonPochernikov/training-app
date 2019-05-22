import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm'
import { Question } from 'src/question/question.schema'
import { Answer } from 'src/answer/answer.schema'

@Entity()
export class QuestionToAnswer extends BaseEntity {
    @PrimaryGeneratedColumn()
    readonly id: number

    @ManyToOne(() => Question, question => question.id)
    @JoinColumn()
    readonly question: number

    @ManyToOne(() => Answer, answer => answer.id)
    @JoinColumn()
    readonly answer: number

    @Column()
    isRight: boolean

    // only db

    @CreateDateColumn()
    readonly createdAt: string

    @UpdateDateColumn({ type: 'timestamp' })
    readonly updatedAt: number
}
