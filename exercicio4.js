
const prompt = require("prompt-sync")({ sigint: true });

const dia = prompt("Digite o nome de um dia da semana: ").toLowerCase(); 

if (dia === "segunda" || dia === "terça" || dia === "terca" || dia === "quarta" || dia === "quinta" || dia === "sexta") {
    console.log(`${dia.charAt(0).toUpperCase() + dia.slice(1)} é um dia útil.`);
} else if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
    console.log(`${dia.charAt(0).toUpperCase() + dia.slice(1)} é um dia de fim de semana.`);
} else {
    console.log("Nome de dia inválido. Por favor, digite um dia válido (ex: segunda, terça, sábado, etc.).");
}
