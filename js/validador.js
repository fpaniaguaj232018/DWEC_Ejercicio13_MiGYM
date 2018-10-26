function validar(){
    mostrarError("");
    validarNombre();  
    validarSexo();
    validarEmail();
    validarDeportes();
    validarTurno();
    validarFechaNacimiento();
}

function validarNombre(){
    var sNombre = document.fregistro.nombre.value.trim();
    if (sNombre.length<3){
        mostrarError("Nombre incorrecto",document.fregistro.nombre);
    }
}

function validarSexo(){
    var selSexo = document.getElementsByName("sexo");
    for (var i=0;i<selSexo.length;i++){
        if (selSexo[i].checked){
            return;
        }
    }
    mostrarError("Selecciona sexo");
}

function validarEmail(){
    var sEmail = document.fregistro.email.value.trim();
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(sEmail)) {
        mostrarError("Email incorrecto", document.fregistro.email);
    };
}

function validarDeportes(){
    var selectedSports = document.querySelectorAll("input[name=deporte]:checked");
    if (selectedSports.length<1 || selectedSports.length>3){
        mostrarError("Elige entre 1 y 3 deportes", document.querySelector("#futbol"));
    }
    /*
    var d=0;
    var deportes = document.getElementsByName("deporte");
    for(var i=0;i<deportes.length;i++){
        if(deportes[i].checked){
            d++;
        }
    }
    if (d<1 || d>3){
        mostrarError("Elige entre 1 y 3 deportes", deportes[0]);
    }
    */
}

function validarTurno(){
    var selectorTurno = document.querySelector("#turno");
    if(selectorTurno.selectedIndex==0){
        mostrarError("Debe elegir un turno");
    }
}

function validarFechaNacimiento(){
    var fechaNacimiento = document.fregistro.fNacimiento.value;
    var edad = getEdad(new Date(fechaNacimiento));
    if (isNaN(edad)){
        mostrarError("Tiene que elegir una fecha de nacimiento");
    } else if (edad<18){
        mostrarError("Tiene que ser mayor de edad");
    }
}

function mostrarError(texto, elemento){
    document.getElementById("mensajeError").innerHTML = texto;
    if (elemento!=null) {
        elemento.focus();
    }
}
        