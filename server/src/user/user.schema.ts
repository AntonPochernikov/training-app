import { Field, ID, ObjectType } from 'type-graphql'
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm'
import { UserRole } from 'src/enums'

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number

    @Field()
    @Column()
    firstName: string

    @Field()
    @Column()
    lastName: string

    @Field()
    @Column({ unique: true })
    nickName: string

    @Field()
    @Column({ unique: true })
    email: string

    @Field({ nullable: true })
    @Column({ nullable: true })
    refreshToken: string

    // only db
    @Column()
    role: UserRole

    @Column()
    password: string

    @CreateDateColumn()
    readonly createdAt: string

    @UpdateDateColumn({ type: 'timestamp' })
    readonly updatedAt: number
}
