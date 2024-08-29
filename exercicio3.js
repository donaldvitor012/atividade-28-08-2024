const prompt = require("prompt-sync")({ sigint: true });

const idade1 = parseInt(prompt("Digite a idade da primeira pessoa: "));
const idade2 = parseInt(prompt("Digite a idade da segunda pessoa: "));
const idade3 = parseInt(prompt("Digite a idade da terceira pessoa: "));

if (idade1 >= 18 && idade2 >= 18 && idade3 >= 18) {
    console.log("Todas as pessoas são maiores de idade.");
} else if (idade1 < 18 && idade2 < 18 && idade3 < 18) {
    console.log("Todas as pessoas são menores de idade.");
} else {
    console.log("Pelo menos uma pessoa eh maior de idade.");
}
