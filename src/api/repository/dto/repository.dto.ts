import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateRepositoryDto {

    @IsNumber()
    @IsNotEmpty()
    idRepository: number;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    name: string;

    @IsString()
    @MaxLength(1)
    @IsNotEmpty()
    @IsEnum(['E', 'D', 'A'])
    state: string;

    @IsDateString()
    @IsNotEmpty()
    createTime: Date;

    @IsEnum(['A', 'I'])
    @MaxLength(1)
    @IsNotEmpty()
    status: string;


}

export class UpdateRepositoryDto {

    @IsNumber()
    @IsOptional()
    idRepository: number;

    @IsString()
    @MaxLength(50)
    @IsOptional()
    name: string;

    @IsEnum(['E', 'D', 'A'])
    @MaxLength(1)
    @IsOptional()
    state: string;

    @IsDateString()
    @IsOptional()
    createTime: Date;

    @IsEnum(['A', 'I'])
    @MaxLength(1)
    @IsOptional()
    status: string;


}