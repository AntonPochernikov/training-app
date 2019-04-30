import {
    Entity,
    BaseEntity,
    Column,
    PrimaryColumn,
    ManyToOne,
    OneToOne,
    OneToMany,
} from 'typeorm'
import { User } from 'src/user/user.schema'

@Entity()
export class Role extends BaseEntity {
    @PrimaryColumn()
    @OneToMany(() => User, user => user.role)
    readonly id: number

    @Column({ unique: true })
    readonly text: string
}
