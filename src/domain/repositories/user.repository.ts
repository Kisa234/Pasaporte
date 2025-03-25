import { UserEntity } from "../entities/user.entity";
import { CreateUserDto } from '../dtos/user/create';
import { UpdateUserDto } from "../dtos/user/update";


export abstract class UserRepository {
    abstract createUser(createUserDto:CreateUserDto):  Promise<UserEntity>;
    abstract updateUser(dni:number,updateUserDto:UpdateUserDto):  Promise<UserEntity>;
    abstract getUserById(id: number): Promise<UserEntity>;
    abstract deleteUser(id: number):  Promise<UserEntity>;
}