import { IsNumber, IsNotEmpty, IsString, MaxLength } from "class-validator";

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
}