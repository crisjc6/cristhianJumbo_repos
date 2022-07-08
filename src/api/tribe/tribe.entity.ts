import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}