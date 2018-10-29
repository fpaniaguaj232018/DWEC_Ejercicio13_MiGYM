class Ficha {
    constructor(
        _nombre,
        _sexo,
        _email,
        _deportes,
        _turno,
        _fechaNacimiento,
        _numeroTarjeta){
            this.nombre = _nombre;
            this.sexo = _sexo;
            this.email = _email;
            this.deportes = _deportes;//OJO, ES UN ARRAY
            this.turno = _turno;
            this.fechaNacimiento = _fechaNacimiento;
            this._numeroTarjeta = _numeroTarjeta;
        }
}