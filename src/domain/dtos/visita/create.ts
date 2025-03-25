export class CreateVisitaDto { 

    constructor(
        public readonly idVisita   : string,
        public readonly NroBoleta  : number,
        public readonly Comentario : string,
        public readonly Dni        : number
    ){}

    static create(props: { [key: string]: any }): [string?, CreateVisitaDto?]{

        const { idVisita, NroBoleta, Comentario, Dni } = props;

        if(!idVisita) {return ['id_visita no puede ser nulo',undefined];}
        if(!NroBoleta) {return ['nro_boleta no puede ser nulo',undefined];}
        if(!Comentario) {return ['comentario no puede ser nulo',undefined];}
        if(!Dni) {return ['dni no puede ser nulo',undefined];}



        return [undefined, new CreateVisitaDto(
            idVisita,
            NroBoleta,
            Comentario,
            Dni
        )];


    }



}