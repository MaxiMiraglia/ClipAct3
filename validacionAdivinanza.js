var intentos = 1;
function adivinanza() {
    var rtacorrecta = "estrella de neutrones";
    var rtainput = document.getElementById("rta").value;
    
    if (rtainput.trim() === "") {
        alert("No puede dejar el campo vacío.");
        return false;
    }
    else {
        if (rtainput.trim().toLowerCase() === rtacorrecta) {
            alert("¡Respuesta correcta! Adivinaste en " + intentos + " intentos");
            alert("Se ha desactivado el boton de envío, para volver a jugar resfresque la página.")
            document.getElementById("enviar").disabled = true;
            return false;
        }
        else if (intentos === 1) {
            alert("Respuesta incorrecta. Intentos realizados: " + intentos);
            intentos++;
            return false;
        }
        else if (intentos === 2) {
            alert("Respuesta incorrecta. Intentos realizados: " + intentos);
            alert("Pista 1: es una estrella");
            intentos++;
            return false;
        }
        else if (intentos === 3) {
            alert("Respuesta incorrecta. Intentos realizados: " + intentos);
            alert("Pista 2: está compuesta mayormente por neutrones...");
            intentos++;
            return false;
        }
        else if (intentos === 4) {
            alert("Respuesta incorrecta. Gastaste tu último intento. Intentos realizados: " + intentos)
            alert("La respuesta era: estrella de neutrones");
            alert("Se ha desactivado el boton de envío, para volver a jugar resfresque la página.");
            document.getElementById("enviar").disabled = true;
            return false;
        }
    }
}