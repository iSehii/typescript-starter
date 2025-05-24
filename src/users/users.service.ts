import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel( User.name ) private userModel: Model<User>
  ) {}
  
  async create(user: CreateUserDto) {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, user: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, user, {
      new: true
    }).exec();
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
