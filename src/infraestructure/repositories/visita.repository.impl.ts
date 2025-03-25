import { VisitaDatasource } from '../../domain/datasources/visita.datasource';
import { CreateVisitaDto } from '../../domain/dtos/visita/create';
import { UpdateVisitaDto } from '../../domain/dtos/visita/update';
import { VisitaEntity } from '../../domain/entities/visita.entity';
import { VisitaRepository } from '../../domain/repositories/visita.repository';

export class VisitaRepositoryImpl implements VisitaRepository{

    constructor(
        private readonly visitaDatasource: VisitaDatasource
    ){}

    createVisita(createVisitaDto: CreateVisitaDto): Promise<VisitaEntity> {
        return this.visitaDatasource.createVisita(createVisitaDto);
    }
    updateVisita(id: string, updateVisitaDto: UpdateVisitaDto): Promise<VisitaEntity> {
        return this.visitaDatasource.updateVisita(id, updateVisitaDto);
    }
    getVisitaById(id: string): Promise<VisitaEntity> {
        return this.visitaDatasource.getVisitaById(id);
    }
    deleteVisita(id: string): Promise<VisitaEntity> {
        return this.visitaDatasource.deleteVisita(id);
    }

}