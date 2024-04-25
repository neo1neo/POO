function numeroMayor(){
    let arrayNum = [];
    let numMayor = 0;

    for(let i=0; i<5; i++){
        let num = parseInt(prompt("Ingrese un número para determinar el mayor"));
        arrayNum.push(num);
        if(numMayor < num)numMayor = num;
       // numMayor = (numMayor < num) ? num : numMayor; es una sintaxis que significa lo mismo que if-else
       //pero escrito de una manera diferente y muy ocasional.
     }
    document.getElementById("lista").innerHTML = `De los números ingresados: ${arrayNum.join(", ")} <h2>${numMayor}</h2> `;
}