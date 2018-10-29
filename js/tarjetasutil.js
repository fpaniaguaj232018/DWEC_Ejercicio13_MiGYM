function identificarTarjeta() {
    var numeroTarjeta = document.querySelector("#tarjeta").value;
    var primerDigito = numeroTarjeta.charAt(0);
    if (primerDigito=="4") {
        document.querySelector("#imgTarjeta").src="images/visa.png";
    } else if (primerDigito=="5") {
        document.querySelector("#imgTarjeta").src="images/mastercard.png";
    } else {
        document.querySelector("#imgTarjeta").src="";
    }
}