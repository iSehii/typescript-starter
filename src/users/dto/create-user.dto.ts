import { isNotEmpty, isString, IsNumber, IsString, IsNotEmpty } from "class-validator";
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNumber()
    @IsNotEmpty()
    edad: number;
}
