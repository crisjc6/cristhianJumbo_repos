import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TribeEntity } from "../tribe/tribe.entity";

@Entity('organization')
export class OrganizationEntity {

    @PrimaryGeneratedColumn()
    idOrganization?: number;

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

    @OneToMany(type => TribeEntity, tribe => tribe.organization)
    tribe: TribeEntity[];
    
}