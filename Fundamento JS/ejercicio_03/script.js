function verificarAcceso() {
    let resultado = "";

    let nombreUsuario = prompt("Ingrese el nombre de usuario:");
    let contraseña = prompt("Ingrese la contraseña:");

    if (nombreUsuario === "diego" && contraseña === "diego123") {
        resultado = "<h2>Acceso concedido</h2>";
    } 
    else {
        resultado = "<h2>Acceso denegado</h2>";
    }

    document.getElementById('lista').innerHTML = resul;
}