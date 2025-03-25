export class CreateUserDto {
    private constructor(
        public readonly Dni: number,
        public readonly NroPasaporte: number,
        public readonly Nombres: string,
        public readonly Correo: string,
        public readonly Telefono: number,
        public readonly Distrito: string,
        public readonly FechaNac: Date,

    ){}

    static create(props: { [key: string]: any }): [string?, CreateUserDto?]{
        const { Dni, NroPasaporte, Nombres, Correo, Telefono, Distrito,
                FechaNac } = props;

        if(!Dni) {return ['dni no puede ser nulo',undefined];}
        if(!NroPasaporte) {return ['nro_pasaporte no puede ser nulo',undefined];}
        if(!Nombres) {return ['nombres no puede ser nulo',undefined];}
        if(!Correo) {return ['correo no puede ser nulo',undefined];}
        if(!Telefono) {return ['telefono no puede ser nulo',undefined];}
        if(!Distrito) {return ['distrito no puede ser nulo',undefined];}
        if(!FechaNac) {return ['fecha_nacimiento no puede ser nulo',undefined];}




        const newFechaNacimiento = new Date(FechaNac);
        if (isNaN(newFechaNacimiento.getTime())) {
            return ['fecha_nacimiento no es válida',undefined];
        }

        return [undefined, new CreateUserDto(
            Dni,
            NroPasaporte,
            Nombres,
            Correo,
            Telefono,
            Distrito,
            newFechaNacimiento,
        )];
    }
}