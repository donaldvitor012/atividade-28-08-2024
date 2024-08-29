const prompt = require("prompt-sync")({sigint:true});

const num = parseInt(prompt("digite um numero:"))

if(num % 3 == 0 && num % 5 == 0){
    console.log("o numero é divisivel por 3 e 5")
}else{
    console.log("o numero nao é divisivel por 3 e por 5 ao mesmo tempo")
}


