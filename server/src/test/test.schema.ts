import { Field, ID, ObjectType } from 'type-graphql'
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@ObjectType()
@Entity()
export class Test extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number

    @Field()
    @Column()
    name: string

    @Field()
    @Column()
    level: string
}
