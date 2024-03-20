    console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'actual' y 'nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
let actual = 2023;
let nac = 2004;
let resultado = actual - nac;
alert("Mi edad es: " + resultado);
// Tu código aquí
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'x' a 'y' y luego muestra el valor de 'y'.
function asignarValores() {
let x = 15;
let y = x;
alert("El valor de Y es: " + y);

// Tu código aquí
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'a' y 'b', resta 'b' de 'a', multiplica 'a' por 'b', y divide 'a' entre 'b'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
let b = 5;
let a = 10;
let suma = a + b;
let resta = a - b;
let multi = a * b;
let divi = a / b;

alert("la suma es " + suma + "\n la resta es " + resta + "\n la multi es " + multi + "\n la division es " + divi );

// Tu código aquí
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'nombre' y 'apellido'.
// Luego, muestra la longitud del mensaje y el primer carácter en el mensaje.
function manipularCadenas() {
let nombre = "Juan";
let apellido = "Pérez";
let mensaje = "El se llama: " + nombre + " " + apellido;
let longitud = mensaje.length;
alert("Mensaje: " + mensaje +"\nLongitud: " + longitud +"\nPrimer Caracter: " + mensaje[0]);
// Tu código aquí
}
</script>