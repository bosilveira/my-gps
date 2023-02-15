import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { User } from "./user.entity"

@Entity()
export class Point {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({ default: 0.0 })
    latitude: number

    @Column({ default: 0.0 })
    longitude: number

    @Column({ default: 0 })
    speed: number

    @ManyToOne(() => User, (user) => user.id)
    user: number

    @CreateDateColumn({ select: false })
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
    
}
