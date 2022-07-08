import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RepositoryEntity } from "../repository/repository.entity";

@Entity('metrics')
export class MetricsEntity {
    @PrimaryGeneratedColumn()
    idMetrics?: number;

    @CreateDateColumn()
    createdA?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        name: 'coverage',
        nullable: false,
    })
    coverage: number;

    @Column({
        type: 'int',
        name: 'bugs',
        nullable: false,
    })
    bugs: number;

    @Column({
        type: 'int',
        name: 'vulnerabilities',
        nullable: false,
    })
    vulnerabilities: number;

    @Column({
        type: 'int',
        name: 'hotspot',
        nullable: false,
    })
    hotspot: number;

    @Column({
        type: 'int',
        name: 'code_smells',
        nullable: false,
    })
    code_smells: number;

    @OneToOne(
        type => RepositoryEntity,
        repository => repository.metrics,
    )
    repository: RepositoryEntity;
}