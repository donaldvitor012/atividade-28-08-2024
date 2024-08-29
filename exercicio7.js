const prompt = require("prompt-sync")({ sigint: true });

let numeros = [];

while (true) {
    let numero = parseInt(prompt("Digite um número (ou 0 para finalizar): "));

    if (numero === 0) break; 

    numeros.push(numero); 
}

if (numeros.length === 0) {
    console.log("Nenhum número foi digitado.");
} else {
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);

    console.log(`O maior número digitado é: ${maior}`);
    console.log(`O menor número digitado é: ${menor}`);
}
