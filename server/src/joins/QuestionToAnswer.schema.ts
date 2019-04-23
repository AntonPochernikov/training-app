import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity()
export class QuestionToAnswer extends BaseEntity {
    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    readonly questionId: string

    @Column()
    readonly answerId: string

    @Column()
    isRight: boolean
    // only db

    @CreateDateColumn()
    readonly createdAt: string

    @UpdateDateColumn({ type: 'timestamp' })
    readonly updatedAt: number
}
