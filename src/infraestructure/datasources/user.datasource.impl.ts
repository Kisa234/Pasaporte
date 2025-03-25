import { prisma } from '../../data/postgres';
import { UserDatasource } from '../../domain/datasources/user.datasource';
import { CreateUserDto } from '../../domain/dtos/user/create';
import { UpdateUserDto } from '../../domain/dtos/user/update';
import { UserEntity } from '../../domain/entities/user.entity';

export class UserDatasourceImp implements UserDatasource {
    
    constructor() {}

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        const user = await prisma.user.create({
            data: createUserDto!
        });
        return UserEntity.fromObject(user);
    }
    async updateUser(Dni: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
        const user =  this.getUserById(Dni);
        const updateUser = await prisma.user.update({
            where: {
                Dni:Dni,
                Eliminado:false
            },
            data: updateUserDto!
        });
        return UserEntity.fromObject(updateUser);
    }
    async getUserById(id: number): Promise<UserEntity> {
        const user = await prisma.user.findUnique({
            where: {
                Dni:id,
                Eliminado:false
            }
        });
        if (!user) {throw new Error('Usuario no encontrado');}
        return UserEntity.fromObject(user);
    }
    async deleteUser(id: number): Promise<UserEntity> {
        const user =  this.getUserById(id);
        const deleteUser =await prisma.user.update({
            where: {
                Dni:id,
                Eliminado:false
            },
            data: {
                Eliminado:true
            }
        });
        return UserEntity.fromObject(deleteUser);
    }

    

}