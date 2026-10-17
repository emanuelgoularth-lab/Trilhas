const prompt = require('prompt-sync')();

console.log("-----CADASTRO PINGUIM------");
let nome = prompt("Digite seu nome: ");
let pnts = Number(prompt("Digite sua pontuação: "));
let pntsMin = 1000; 

console.log("Analisando perfil...");

if(pnts <= pntsMin){
console.log("Beta! O jogador "+ nome +" deve ser jogados aos lobos.");
let pntsnec = pntsMin - pnts;
console.log("Você precisa ter mais "+ pntsnec +" pontos para entrar no time.");
}else
console.log("Viril! O jogador "+ nome +" deve fazer parte do time principal.");
