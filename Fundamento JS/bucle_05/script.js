function primerosPares(){
    let n = parseInt(prompt("Ingrese la cantidad de números pares que quiere tener"));
    let arrayPares = [];

    for(let i = 1; i <= n; i++){
        arrayPares.push(i*2);
    }
    document.getElementById("lista").innerHTML = `
    `
}