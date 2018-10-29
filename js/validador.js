
var hayError = false;

function validar(){
    mostrarError("");
    hayError = false;
    validarNombre();  
    validarSexo();
    validarEmail();
    validarDeportes();
    validarTurno();
    validarFechaNacimiento();
    validarTarjeta();
    if (hayError==false){
        //Nombre
        var nombre = document.fregistro.nombre.value;
        //Sexo
        var sexo;
        if (document.querySelector("#hombre").checked){
            sexo = "Hombre";
        } else {
            sexo = "Mujer";
        }
        //Email
        var email = document.fregistro.email.value;
        //Deportes
        var deportes = document.querySelectorAll("input[name=deporte]:checked");
        var arrayDeportes = new Array();
        for (var i=0;i<deportes.length;i++){
            arrayDeportes.push(deportes[i].id);
        }
        //Horario

        //Fecha de Nacimiento

        //Numero de tarjeta

        var ficha = new Ficha(
            

        );
    }
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

function validarTarjeta(){
    console.log("VALIDANDO TARJETA");
    var numeroTarjeta = document.querySelector("#tarjeta").value;
    if (numeroTarjeta=="" || isNaN(numeroTarjeta)){
        mostrarError("El número de la tarjeta tiene que ser un número",document.querySelector("#tarjeta"));
    } else if (numeroTarjeta.length!=16) {
        mostrarError("Número de dígitos de la tarjeta insuficientes",document.querySelector("#tarjeta"))
    }
}


function mostrarError(texto, elemento){
    document.getElementById("mensajeError").innerHTML = texto;
    if (elemento!=null) {
        elemento.focus();
    }
    hayError=true;
}
        