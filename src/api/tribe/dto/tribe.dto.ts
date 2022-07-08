import { IsNumber, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { OrganizationEntity } from "../../organization/organization.entity";
import { RepositoryEntity } from "../../repository/repository.entity";

export class CreateTribeDto {
    @IsNumber()
    @IsNotEmpty()
    idTribe: number;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    status: number;

    organization: OrganizationEntity | number | string;
    
    repository: RepositoryEntity[];
}

export class UpdateTribeDto {
    @IsNumber()
    @IsNotEmpty()
    idTribe: number;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    status: number;

    organization: OrganizationEntity | number | string;
    
    repository: RepositoryEntity[];
}