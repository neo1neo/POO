
function asignarRango() {
    let puntos = parseFloat(prompt("Ingrese la puntuación:"));

    let mensaje;
    if (puntos >= 90) {
        mensaje = "Excelente";
    } else if (puntos >= 70 && puntos <= 89) {
        mensaje = "Buen trabajo";
    } else {
        mensaje = "Necesitas mejorar";
    }

    document.getElementById('lista').innerHTML = mensaje;
}