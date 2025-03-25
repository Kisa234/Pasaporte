import { CreateUserDto } from "../../dtos/user/create";
import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from "../../repositories/user.repository";

export interface CreateUserUseCase{
    execute ( createUserDto: CreateUserDto ): Promise<UserEntity>;
} 

export class CreateUser implements CreateUserUseCase{
    
    constructor(
        private readonly userRepository: UserRepository
    ){}

    async execute(createUserDto: CreateUserDto): Promise<UserEntity>{
        return await this.userRepository.createUser(createUserDto);
    }
}