
export class UserEntity{

    constructor(
        public Dni         : number,
        public NroPasaporte: number,
        public Nombres     : string,
        public Correo      : string,
        public Telefono    : number,
        public Distrito    : string,
        public FechaNac    : Date,
        public FechaReg    : Date,
        public Puntaje     : number,
        public Nivel       : string
    ){}

    static fromObject(obj: { [key: string]: any }): UserEntity {
        const { Dni,NroPasaporte, Nombres, Correo, Telefono, Distrito,
                FechaNac, FechaReg, Puntaje, Nivel } = obj;

        if(Dni!) {throw new Error('dni no puede ser nulo');}
        if(NroPasaporte!) {throw new Error('nro_pasaporte no puede ser nulo');}
        if(Nombres!) {throw new Error('nombres no puede ser nulo');}
        if(Correo!) {throw new Error('correo no puede ser nulo');}
        if(Telefono!) {throw new Error('telefono no puede ser nulo');}
        if(Distrito!) {throw new Error('distrito no puede ser nulo');}
        if(FechaNac!) {throw new Error('fecha_nacimiento no puede ser nulo');}
        if(FechaReg!) {throw new Error('fecha_registro no puede ser nulo');}
        if(Puntaje!) {throw new Error('puntaje no puede ser nulo');}
        if(Nivel!) {throw new Error('nivel no puede ser nulo');}


        const newFechaRegistro = new Date(FechaNac);
        if (isNaN(newFechaRegistro.getTime())) {
            throw new Error('fecha_registro no es válida');
        }

        const newFechaNacimiento = new Date(FechaReg);
        if (isNaN(newFechaNacimiento.getTime())) {
            throw new Error('fecha_nacimiento no es válida');
        }

        return new UserEntity(
            Dni,
            NroPasaporte,
            Nombres,
            Correo,
            Telefono,
            Distrito,
            newFechaNacimiento,
            newFechaRegistro,
            Puntaje,
            Nivel
        );

    }

}