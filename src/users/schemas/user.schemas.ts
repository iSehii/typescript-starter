import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User{
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    edad: number;
}

export const UserSchema = SchemaFactory.createForClass(User);