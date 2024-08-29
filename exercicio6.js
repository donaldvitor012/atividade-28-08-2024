const prompt = require("prompt-sync")({ sigint: true });

const numero = parseInt(prompt("Digite um número para gerar a sequência de Fibonacci dele: "));

let a = 0; 
let b = 1; 

console.log("Sequência de Fibonacci:");

if (numero >= 0) console.log(a);
if (numero >= 1) console.log(b);

while (true) {
    let proximo = a + b; 

    if (proximo > numero) break; 

    console.log(proximo); 

    a = b;
    b = proximo;
}
