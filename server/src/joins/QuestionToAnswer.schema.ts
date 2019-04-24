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
    @JoinColumn({ name: "question_id" })
    readonly questionId: string

    @ManyToOne(() => Answer, answer => answer.id)
    @JoinColumn({ name: "answer_id" })
    readonly answerId: string

    @Column()
    isRight: boolean

    // only db

    @CreateDateColumn()
    readonly createdAt: string

    @UpdateDateColumn({ type: 'timestamp' })
    readonly updatedAt: number
}
