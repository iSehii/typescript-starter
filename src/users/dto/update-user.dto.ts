import { isNotEmpty, isString, IsNumber, IsString, IsNotEmpty, IsOptional } from "class-validator";
export class UpdateUserDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    password: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    edad: number;
}
