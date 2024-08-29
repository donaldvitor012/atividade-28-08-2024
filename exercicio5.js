const prompt = require("prompt-sync")({ sigint: true });

function ehPrimo(numero) {
    if (numero <= 1) return false; 


    for (let i = 2; i <= Math.sqrt(numero); i++) { 

        
        if (numero % i === 0) {
            return false; 
        }
    }
    return true;
}
const N = parseInt(prompt("Digite um número N: "));

console.log(`Números primos menores que ${N}:`);
for (let i = 2; i < N; i++) {



    if (ehPrimo(i)) {
        console.log(i);
    }
}
