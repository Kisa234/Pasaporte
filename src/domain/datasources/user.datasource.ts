import { UserEntity } from "../entities/user.entity";
import { CreateUserDto } from '../dtos/user/create';
import { UpdateUserDto } from "../dtos/user/update";


export abstract class UserDatasource {
    abstract createUser(createUserDto:CreateUserDto):  Promise<UserEntity>;
    abstract updateUser(updateUserDto:UpdateUserDto):  Promise<UserEntity>;
    abstract getUserById(id: string): Promise<UserEntity>;
    abstract deleteUser(id: string):  Promise<UserEntity>;
}