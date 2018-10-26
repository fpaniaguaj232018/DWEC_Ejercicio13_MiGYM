/*
Devuelve el número de años humanos de una persona (o animal) 
dada la fecha de nacimiento.

@param fechaNacimiento. Objeto de la clase Date con la fecha de nacimiento
@return int. Edad en años de la persona (o animal).
*/
function getEdad(fechaNacimiento){
    var anyoNacimiento = fechaNacimiento.getFullYear();
    var mesNacimiento = fechaNacimiento.getMonth() + 1;
    var diaNacimiento = fechaNacimiento.getDate();

    var fecha = new Date();
    var anyoHoy = fecha.getFullYear();
    var mesHoy = fecha.getMonth() + 1;
    var diaHoy = fecha.getDate();
    
    var edad = anyoHoy - anyoNacimiento;
    if (mesHoy<mesNacimiento){
        edad--;
    } else if ((mesHoy==mesNacimiento) && (diaHoy<diaNacimiento)){
        edad--;
    }
    return edad;
}