import { CreateUserDto } from "../../dtos/user/create";
import { UpdateUserDto } from "../../dtos/user/update";
import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from "../../repositories/user.repository";

export interface DeleteUserUseCase{
    execute ( Dni: number ): Promise<UserEntity>;
} 

export class DeleteUser implements DeleteUserUseCase{
    
    constructor(
        private readonly userRepository: UserRepository
    ){}

    async execute(Dni: number): Promise<UserEntity>{
        return await this.userRepository.deleteUser(Dni);
    }
}