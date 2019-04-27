import { QuestionToAnswer } from 'src/joins/QuestionToAnswer.schema'
import { Field, ID, ObjectType } from 'type-graphql'
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

@ObjectType()
@Entity()
export class Answer extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    @OneToMany(() => QuestionToAnswer, questionToAnswer => questionToAnswer.answer)
    readonly id: number

    @Field()
    @Column({ unique: true })
    text: string

    // only db

    @CreateDateColumn()
    readonly createdAt: string

    @UpdateDateColumn({ type: 'timestamp' })
    readonly updatedAt: number
}
