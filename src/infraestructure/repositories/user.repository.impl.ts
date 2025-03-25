import { UserDatasource } from '../../domain/datasources/user.datasource';
import { CreateUserDto } from '../../domain/dtos/user/create';
import { UpdateUserDto } from '../../domain/dtos/user/update';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

export class UserRepositoryImpl implements UserRepository{

    constructor(
        private readonly userDatasource: UserDatasource
    ){}

    createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userDatasource.createUser(createUserDto);
    }
    updateUser(dni: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
        return this.userDatasource.updateUser(dni, updateUserDto);
    }
    getUserById(id: number): Promise<UserEntity> {
        return this.userDatasource.getUserById(id);
    }
    deleteUser(id: number): Promise<UserEntity> {
        return this.userDatasource.deleteUser(id);
    }

}