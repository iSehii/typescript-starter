import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum TypeUser{
    admin  = 'admin',
    user  = 'user', 
    client =  'client'
}

@Schema()
export class User{
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    imagen: string;

    @Prop({ default: TypeUser.user })
    tipo: TypeUser
}

export const UserSchema = SchemaFactory.createForClass(User);