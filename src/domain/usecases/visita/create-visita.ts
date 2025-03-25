import { CreateVisitaDto } from '../../dtos/visita/create';
import { VisitaEntity } from '../../entities/visita.entity';
import { VisitaRepository } from '../../repositories/visita.repository';

export interface CreateVisitaUseCase{
    execute ( createVisitaDto:CreateVisitaDto): Promise<VisitaEntity>;
}

export class CreateVisita implements CreateVisitaUseCase{  
    constructor(
        private readonly visitaRepository: VisitaRepository
    ){}

    async execute(createVisitaDto: CreateVisitaDto): Promise<VisitaEntity>{
        return await this.visitaRepository.createVisita(createVisitaDto);
    }
}