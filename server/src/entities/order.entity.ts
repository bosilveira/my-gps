import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { User } from "./user.entity"

@Entity()
export class Order {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    title: string

    @Column()
    flag: number

    @Column()
    status: string

    @ManyToOne(() => User, (user) => user.id)
    user: number

    @CreateDateColumn({ select: false })
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
    
}
