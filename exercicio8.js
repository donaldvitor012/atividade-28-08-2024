const prompt = require("prompt-sync")({ sigint: true });

const frase = prompt("Digite uma frase: ").toLowerCase(); 
const vogais = "aeiou";

let contadorVogais = 0;

for (let i = 0; i < frase.length; i++) {
    if (vogais.includes(frase[i])) {
        contadorVogais++;
    }
}

console.log(`A frase contém ${contadorVogais} vogais.`);
