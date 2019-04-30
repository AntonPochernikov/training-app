import { Field, ID, ObjectType } from 'type-graphql'
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    ManyToOne,
    OneToMany,
} from 'typeorm'
import { UserRole } from 'src/enums'
import { Role } from 'src/role/role.schema'

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
    @ManyToOne(() => Role, role => role.id)
    @Column()
    role: number

    @Column()
    password: string

    @CreateDateColumn()
    readonly createdAt: string

    @UpdateDateColumn({ type: 'timestamp' })
    readonly updatedAt: number
}
