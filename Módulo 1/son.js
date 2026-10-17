const prompt = require('prompt-sync')();

console.log("-----CADASTRO PINGUIM------");
let cadping = prompt("Digite o nome do pinguim: ");

let pontping = Number(prompt("Digite a pontuação do pinguim: "));

console.log("Pinguim "+ cadping + " Cadastrado com "+ pontping +" de pontuação.");
