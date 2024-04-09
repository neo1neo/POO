
function Ident() 
{
    let resultado = "";

    let num1 = prompt("Por favor añada un numero: ");
    let num2 = prompt("Por favor añada un numero: ");

    if(num1 >= num2){
        resultado = `El mayor es: <h2>${num1}</h2>`
    }

    else{
        resultado = `El mayor es : <h2>${num2}</h2>`
    }
    document.getElementById('lista').innerHTML = resultado;
    
}