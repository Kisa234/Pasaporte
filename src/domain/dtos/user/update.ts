export class UpdateUserDto {
    private constructor(
        public readonly Dni: number,
        public readonly Nombres?: string,
        public readonly Correo?: string,
        public readonly Telefono?: number,
        public readonly Distrito?: string,
        public readonly FechaNac?: Date,
        public readonly Puntaje?: number,
        public readonly Nivel?: string
    ){}

    get values(){
        const returnObj:{ [key: string]: any } = {};
        if (this.Nombres) returnObj.Nombres = this.Nombres;
        if (this.Correo) returnObj.Correo = this.Correo;
        if (this.Telefono) returnObj.Telefono = this.Telefono;
        if (this.Distrito) returnObj.Distrito = this.Distrito;
        if (this.FechaNac) returnObj.FechaNac = this.FechaNac;
        if (this.Puntaje) returnObj.Puntaje = this.Puntaje;
        if (this.Nivel) returnObj.Nivel = this.Nivel;

        return  returnObj;
    }

    static create(props: { [key: string]: any }): [string?, UpdateUserDto?]{
        const { Dni, Nombres, Correo, Telefono, Distrito,
                FechaNac, Puntaje, Nivel } = props;

        if(!Dni) {return ['dni del usuario es requerido',undefined];}
        
        return [undefined, new UpdateUserDto(Dni, Nombres, Correo, Telefono, Distrito, FechaNac, Puntaje, Nivel)];
    }
}