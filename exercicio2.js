const prompt = require("prompt-sync")({sigint:true});

const num1 = parseInt(prompt("Digite o primeiro Numero:"));
const num2 = parseInt(prompt("Digite o segundo Numero:"));
const num3 = parseInt(prompt("Digite o terceiro Numero:"));

var maior;
var menor;
maior = menor = num1;

if(num2 > maior){
    maior = num2
}else{
    menor = num2
}

if(maior < num3){
    maior = num3;
}
if(menor > num3){
    menor = num3
}
console.log(`O numero maior eh ${maior} e o menor eh ${menor}`);