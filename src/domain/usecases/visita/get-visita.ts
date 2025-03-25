import { VisitaEntity } from "../../entities/visita.entity";
import { VisitaRepository } from "../../repositories/visita.repository";

export interface GetVisitaUseCase {
    execute(id: string): Promise<VisitaEntity>;
}


export class GetVisita implements GetVisitaUseCase {
    constructor(
        private readonly visitaRepository: VisitaRepository
    ){}

    async execute(id: string): Promise<VisitaEntity> {
        return await this.visitaRepository.getVisitaById(id);
    }
}