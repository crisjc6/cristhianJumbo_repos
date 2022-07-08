import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MetricsEntity } from "../metrics/metrics.entity";
import { TribeEntity } from "../tribe/tribe.entity";

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

    
    @ManyToOne(type => TribeEntity, tribe => tribe.repository)
    tribe: TribeEntity | number | string;

    @OneToOne(
        type => MetricsEntity,
        metrics => metrics.repository,
    )
    @JoinColumn()
    metrics?: MetricsEntity;
}