import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'
import { QuestionToAnswer } from 'src/joins/QuestionToAnswer.schema'

@ObjectType()
@Entity()
export class Question extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    @OneToMany(() => QuestionToAnswer, questionToAnswer => questionToAnswer.questionId)
    readonly id: number

    @Field()
    @Column({ unique: true })
    title: string

    @Field()
    @Column()
    text: string

    // only db
    @CreateDateColumn()
    readonly createdAt: string

    @UpdateDateColumn({ type: 'timestamp' })
    readonly updatedAt: number
}
