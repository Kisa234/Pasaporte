import { prisma } from '../../data/postgres';
import { VisitaDatasource } from '../../domain/datasources/visita.datasource';
import { CreateVisitaDto } from '../../domain/dtos/visita/create';
import { UpdateVisitaDto } from '../../domain/dtos/visita/update';
import { VisitaEntity } from '../../domain/entities/visita.entity';

export class VisitaDatasourceImpl implements VisitaDatasource{

    constructor(){}
    
    async createVisita(createVisitaDto: CreateVisitaDto): Promise<VisitaEntity> {
        const visita = await prisma.visita.create({
            data: createVisitaDto!
        });
        return VisitaEntity.fromObject(visita);
    }
    async updateVisita(id: string, updateVisitaDto: UpdateVisitaDto): Promise<VisitaEntity> {
        const user = this.getVisitaById(id);
        const updateVisita = await prisma.visita.update({
            where: {
                idVisita:id
            },
            data: updateVisitaDto!
        });
        return VisitaEntity.fromObject(updateVisita);
    }
    async getVisitaById(id: string): Promise<VisitaEntity> {
        const user = await prisma.visita.findUnique({
            where: {
                idVisita:id
            }
        });
        if (!user) {throw new Error('Visita no encontrada');}
        return VisitaEntity.fromObject(user);
    }
    async deleteVisita(id: string): Promise<VisitaEntity> {
        const user = this.getVisitaById(id);
        const deleteVisita =await prisma.visita.delete({
            where: {
                idVisita:id
            }
        });
        return VisitaEntity.fromObject(deleteVisita);
    }

    

}