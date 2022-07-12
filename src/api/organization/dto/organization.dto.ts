import { IsNotEmpty, isNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength } from "class-validator";
import { TribeEntity } from "../../tribe/tribe.entity";

export class CreateOrganizationDto {

    
    @IsNumber()
    @IsNotEmpty()
    idOrganization: number;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    status: number;

    tribe: TribeEntity[];
}

export class UpdateOrganizationDto {

    
    @IsNumber()
    @IsOptional()
    idOrganization?: number;

    @IsString()
    @MaxLength(50)
    @IsOptional()
    name: string;

    @IsNumber()
    @IsOptional()
    status: number;

    tribe: TribeEntity[];
}