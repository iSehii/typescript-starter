import { isNotEmpty, isString, IsNumber, IsString, IsNotEmpty, isNumber, IsOptional, IsEnum } from "class-validator";
import { TypeUser } from "../schemas/user.schemas";
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    imagen: string; 

    @IsEnum(TypeUser)
    @IsOptional()
    tipo: TypeUser;
}
