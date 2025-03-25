import { CreateUserDto } from "../../dtos/user/create";
import { UpdateUserDto } from "../../dtos/user/update";
import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from "../../repositories/user.repository";

export interface UpdateUserUseCase{
    execute ( dni:number,updateUserDto: UpdateUserDto ): Promise<UserEntity>;
} 

export class UpdateUser implements UpdateUserUseCase{
    
    constructor(
        private readonly userRepository: UserRepository
    ){}

    async execute(dni:number,updateUserDto: UpdateUserDto): Promise<UserEntity>{
        return await this.userRepository.updateUser(dni,updateUserDto);
    }
}