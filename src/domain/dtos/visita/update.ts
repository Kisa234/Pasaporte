export class UpdateVisitaDto { 

    constructor(
        public readonly idVisita   : string,
        public readonly NroBoleta  : number,
        public readonly Comentario : string,
        public readonly Dni        : number
    ){}

    get values(){
        const returnObj:{ [key: string]: any } = {};
        returnObj.idVisita = this.idVisita;
        returnObj.NroBoleta = this.NroBoleta;
        returnObj.Comentario = this.Comentario;
        returnObj.Dni = this.Dni;

        return  returnObj;
    }

    static create(props: { [key: string]: any }): [string?, UpdateVisitaDto?]{

        const { idVisita, NroBoleta, Comentario, Dni } = props;

        if(!idVisita) {return ['id_visita no puede ser nulo',undefined];}
        if(!NroBoleta) {return ['nro_boleta no puede ser nulo',undefined];}
        if(!Comentario) {return ['comentario no puede ser nulo',undefined];}
        if(!Dni) {return ['dni no puede ser nulo',undefined];}



        return [undefined, new UpdateVisitaDto(
            idVisita,
            NroBoleta,
            Comentario,
            Dni
        )];


    }



}