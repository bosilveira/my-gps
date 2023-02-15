import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column({ select: false, default: '123' })
    password: string

    @Column()
    role: number

    @Column()
    department: string

    @Column({ default: false })
    available: boolean

    @Column({ default: 'Offline' })
    status: string

    @CreateDateColumn({ select: false })
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;


}
