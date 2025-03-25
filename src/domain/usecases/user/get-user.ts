import { CreateUserDto } from "../../dtos/user/create";
import { UpdateUserDto } from "../../dtos/user/update";
import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from "../../repositories/user.repository";
import { get } from 'env-var';

export interface GetUserUseCase{
    execute ( Dni: number ): Promise<UserEntity>;
} 

export class GetUser implements GetUserUseCase{
    
    constructor(
        private readonly userRepository: UserRepository
    ){}

    async execute(Dni: number): Promise<UserEntity>{
        return await this.userRepository.getUserById(Dni);
    }
}