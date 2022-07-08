import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrganizationEntity } from "../organization/organization.entity";
import { RepositoryEntity } from "../repository/repository.entity";

@Entity('tribe')
export class TribeEntity{
    
    @PrimaryGeneratedColumn()
    idTribe?: number;

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
        type: 'int',
        name: 'status',
        nullable: false,
    })
    status: number;

    @ManyToOne(type => OrganizationEntity, organization => organization.tribe)
    organization: OrganizationEntity | number | string;

    @OneToMany(type => RepositoryEntity, repository => repository.tribe)
    repository: RepositoryEntity[];
}