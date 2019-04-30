import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    readonly id: number

    @Column({ unique: true })
    text: string
}
