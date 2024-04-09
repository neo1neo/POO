
function numero() {
    let resultado = "";
    let numero = parseFloat(prompt("Ingrese un numero:"));

    if (numero > 0) {
        resultado = `El numero <h2>${numero}</h2> es positivo`;
    } else if (numero < 0) {
        resultado = `El numero <h2>${numero}</h2> es negativo`;
    } else {
        resultado = `El numero <h2>${numero}</h2> es igual a cero`;
    }
    document.getElementById('lista').innerHTML = resul;
}