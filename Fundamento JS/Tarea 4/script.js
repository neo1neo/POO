console.log("Vinculado");

function identificarMayorEdad() {
    //Identificar si es mayor de edad
    let edad = prompt("Por favor, ingrese su edad:");

    if(edad >= 18){
        resultado = `Es mayor de edad, tiene: <h2>${edad}</h2>"`
        } else {
            resultado = `Es menor de edad, tiene: <h2>${edad}</h2>"`
        }
            document.getElementById(`lista`).innerHTML = resultado;
}
