
function ident(){
    let resultado = "";
    let temp = parseFloat(prompt("Ingrese la temperatura actual en grados Celsius:"));

    if(temp < 0){
        resultado = `Hace frío, la temperatura actual es : <h2>${temp}</h2>`;
    }
    else if (temp >= 0 && temp < 25) {
        resultado = `La temperatura es agradable, la temperatura actual es : <h2>${temp}</h2>`;
    }
    else {
        resultado = `Hace calor, la temperatura actual es : <h2>${temp}</h2>`;
    }

    document.getElementById('lista').innerHTML = resul;
}