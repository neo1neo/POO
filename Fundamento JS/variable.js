//Ejercicios Creacion de variables

//Una variable global de tipo var
var global = "Global";
//Variable Local
let local = "Local";
//Constante
const constante = "Constante"
let int = 4;
//Variable NumeroDecimal
let float = 33.3;
//Variable CadenaTexto
let string = "CadenaTexto"
//Variable Booleana
let bool = true;
//Variable Arreglo
let array = [1, 2];
//Variable Objeto
let Objeto = {Nombre: "Diego"};
//Variable Undefinida
let undefinida;
//Variable Nula
let Nula = null;
//Operación simple
function sumar(num1, num2){
    return num1 + num2;
};


console.log("Variables: Global " + global + " Local" + local + " - Constante: " + constante + " NumeroEntero " + int + " NumeroDecimal " + float + " CadenaTexto " + string + " Booleana "
+ bool + " Arreglo " + array + " Objeto " + Objeto + " Undefinida" + undefinida + " Nula " + null + " Operación simple" + sumar(10,7));
