import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('repository')
export class RepositoryEntity {

    @PrimaryGeneratedColumn()
    idRepository?: number;

    @CreateDateColumn()
    createdA?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @Column({
        type: 'varchar',
        name: 'name',
        length: 50,
        nullable: false,
    })
    name: string

    @Column({
        type: 'enum',
        name: 'state',
        enum: ['E', 'D', 'A'],
    })
    state: string;

    @Column({ 
        type: 'timestamptz',
        name: 'create_time', 
    })
    createTime: Date;

    @Column({
        type: 'enum',
        name: 'status',
        enum: ['A', 'I'],
    })
    status: string;
}