function validar(){
    validarNombre();    
}

function validarNombre(){
    var sNombre = document.fregistro.nombre.value;
    if (sNombre.length<3){
        document.fregistro.nombre.focus();
    }


}
        