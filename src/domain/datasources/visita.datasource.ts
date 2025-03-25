import { CreateVisitaDto } from "../dtos/visita/create";
import { UpdateVisitaDto } from "../dtos/visita/update";
import { VisitaEntity } from "../entities/visita.entity";

export abstract class VisitaDatasource {
    abstract createVisita(createVisitaDto:CreateVisitaDto):  Promise<VisitaEntity>;
    abstract updateVisita(id: string,updateVisitaDto:UpdateVisitaDto):  Promise<VisitaEntity>;
    abstract getVisitaById(id: string): Promise<VisitaEntity>;
    abstract deleteVisita(id: string):  Promise<VisitaEntity>;
}