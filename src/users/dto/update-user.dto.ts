import { isNotEmpty, isString, IsNumber, IsString, IsNotEmpty, IsOptional, IsEnum } from "class-validator";
import { TypeUser } from "../schemas/user.schemas";
export class UpdateUserDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    imagen: string;

    @IsEnum(TypeUser)
    @IsNotEmpty()
    @IsOptional()
    tipo: TypeUser;

}
