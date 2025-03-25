import { VisitaEntity } from "../../entities/visita.entity";
import { VisitaRepository } from "../../repositories/visita.repository";

export interface DeleteVisita {
    execute(id: string): Promise<VisitaEntity>;
}

export class DeleteVisitaUseCase implements DeleteVisita {
    constructor(
        private readonly visitaRepository: VisitaRepository
    ){}
    async execute(id: string): Promise<VisitaEntity> {
        return await this.visitaRepository.deleteVisita(id);
    }   
}