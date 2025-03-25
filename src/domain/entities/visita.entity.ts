export class VisitaEntity{

    constructor(
        public idVisita   : string,
        public NroBoleta  : number,
        public FechaVisita: Date,
        public Comentario : string,
        public Dni        : number
    ){}

    static fromObject(obj: { [key: string]: any }): VisitaEntity {

        const { idVisita, NroBoleta, FechaVisita, Comentario, Dni } = obj;

        if(idVisita!) {throw new Error('id_visita no puede ser nulo');}
        if(NroBoleta!) {throw new Error('nro_boleta no puede ser nulo');}
        if(FechaVisita!) {throw new Error('fecha_visita no puede ser nulo');}
        if(Comentario!) {throw new Error('comentario no puede ser nulo');}
        if(Dni!) {throw new Error('dni no puede ser nulo');}

        const newFechaVisita = new Date(FechaVisita);
        if (isNaN(newFechaVisita.getTime())) {
            throw new Error('fecha_visita no es válida');
        }

        return new VisitaEntity(
            idVisita,
            NroBoleta,
            newFechaVisita,
            Comentario,
            Dni
        );

    }


}