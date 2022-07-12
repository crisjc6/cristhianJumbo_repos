import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateMetricsDto {
    
    @IsNumber()
    @IsNotEmpty()
    idMetrics: number

    @IsNumber()
    @IsNotEmpty()
    coverage: number

    @IsNumber()
    @IsNotEmpty()
    bugs: number

    @IsNumber()
    @IsNotEmpty()
    vulnerabilities: number

    @IsNumber()
    @IsNotEmpty()
    hotspot: number

    @IsNumber()
    @IsNotEmpty()
    code_smells: number
}


export class UpdateMetricsDto {
    
    @IsNumber()
    @IsOptional()
    idMetrics: number

    @IsNumber()
    @IsOptional()
    coverage: number

    @IsNumber()
    @IsOptional()
    bugs: number

    @IsNumber()
    @IsOptional()
    vulnerabilities: number

    @IsNumber()
    @IsOptional()
    hotspot: number

    @IsNumber()
    @IsOptional()
    code_smells: number
}