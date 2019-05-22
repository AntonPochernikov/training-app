import { TestToQuestion } from 'src/joins/TestToQuestion.schema'
import { Field, ID, ObjectType } from 'type-graphql'
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Question } from 'src/question/question.schema'

@ObjectType()
@Entity()
export class Test extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    @OneToMany(() => TestToQuestion, testToQuestion => testToQuestion.test)
    readonly id: number

    @Field()
    @Column()
    name: string

    @Field(() => [Question])
    questions: Question[]

    
    // @Field()
    // @Column()
    // level: string
}
