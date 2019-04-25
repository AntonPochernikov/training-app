import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'
import { QuestionToAnswer } from 'src/joins/QuestionToAnswer.schema'
import { Answer } from 'src/answer/answer.schema'

@ObjectType()
@Entity()
export class Question extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    @OneToMany(() => QuestionToAnswer, questionToAnswer => questionToAnswer.question)
    readonly id: number

    @Field()
    @Column({ unique: true })
    title: string

    @Field()
    @Column()
    text: string

    @Field(() => [ID])
    rightAnswers: number[]

    @Field(() => [Answer])
    answers: Answer[]

    // // only db
    // @CreateDateColumn()
    // readonly createdAt: string

    // @UpdateDateColumn({ type: 'timestamp' })
    // readonly updatedAt: number
}
