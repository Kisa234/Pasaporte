import { UpdateVisitaDto } from "../../dtos/visita/update";
import { VisitaEntity } from "../../entities/visita.entity";
import { VisitaRepository } from "../../repositories/visita.repository";

export interface UpdateVisitaUseCase{
    execute ( id:string,updateVisitaDto: UpdateVisitaDto ): Promise<VisitaEntity>;
}

export class UpdateVisita implements UpdateVisitaUseCase{
    constructor(
        private readonly visitaRepository: VisitaRepository
    ){}
    async execute(id: string, updateVisitaDto: UpdateVisitaDto): Promise<VisitaEntity> {
        return await this.visitaRepository.updateVisita(id,updateVisitaDto);
    }
}