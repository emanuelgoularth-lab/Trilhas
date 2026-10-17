const prompt = require('prompt-sync')();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log('\n------- MENU -------');
    console.log('1 - Cadastrar Jogador');
    console.log('2 - Deletar Jogador');
    console.log('3 - Mostrar Equipe');
    console.log('4 - Calcular Média da Equipe');
    console.log('5 - Atualizar Pontos');
    console.log('6 - Sair');
    console.log('\n');

}

function mostraEquipe(){
    if (time.length === 0) {
        return;
    }

    for (let i = 0; i < time.length; i++){
        let jogador = time[i];
        console.log((i + 1) + '.' + jogador.nome + '| Função: ' + jogador.funcao + '| ' + 'Pontuação: ' + jogador.pontuacao);

    }    
    console.log("---------------------------------");
    console.log('O seu time atual é: ', time);
    console.log("---------------------------------");
}

function cadastrarJogador()  {
     // Lógica para cadastrar jogador
    let nomeJogador = prompt('Digite o nome do jogador: ');
    let funcaoJogador = prompt('Digite a função do time: ');
    let pontuacaoJogador = parseInt(prompt('Digite a pontuação do jogador: ')); 

    if (isNaN(pontuacaoJogador)) {
        console.log('Pontuação inválida!');
            return;
    } else {
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador,
        }
        time.push(recruta);
        console.log('Jogador ' + nomeJogador + ' cadastrado com sucesso!');
    }


}

function deletarJogador() {
    if (time.length === 0) {
    console.log('Não há jogadores cadastrados para deletar.');
    return
    }

    let nomeDeletado = prompt('Digite o nome do jogador que deseja deletar: ');
    let indexDeletado = -1;
    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    }

    if (indexDeletado === -1) {
        console.log('Jogador não encontrado no time.');
        return;
    }
    time.splice(indexDeletado, 1);
    console.log('Jogador ' + nomeDeletado + ' deletado com sucesso!');
}

function calcularMedia() {
    if (time.length === 0) {
        console.log('Não há jogadores cadastrados para calcular a média.');
        return;
    }

    let totalPontos = 0;
    for (let i = 0; i < time.length; i++) {
        totalPontos += time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;
    console.log('A média da equipe é: ' + mediaPontos);
}

function atualizarPontuacao() {
    console.log('\n--- ATUALIZAÇÃO DE RANKING ---');

    if (time.length === 0) {
        console.log('Não há jogadores cadastrados.');
        return;
    }

    let nomeAtualizar = prompt('Qual o nome do jogador que você quer atualizar? ');
    let encontrado = false;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeAtualizar) {
            let pontosNovos = parseInt(prompt('Quantos pontos ele ganhou hoje? '));

            if (isNaN(pontosNovos)) {
                console.log('Pontuação inválida!');
                return;
            }

            time[i].pontuacao += pontosNovos;

            console.log('SUCESSO! A pontuação de ' + time[i].nome + ' subiu para ' + time[i].pontuacao + ' pontos!');
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        console.log('Jogador não encontrado.');
    }
}

while (continuar === true) {
    mostrarMenu();
    let opcao = prompt('Escolha uma opção (1 a 6): ');

    if (opcao === '1') {
        cadastrarJogador();

    } else if (opcao === '2') {
        deletarJogador();

    } else if (opcao === '3') {
        mostraEquipe();

    } else if (opcao === '4') {
        calcularMedia();

    } else if (opcao === '5') {
        atualizarPontuacao();

    } else if (opcao === '6') {
        continuar = false;
        console.log('Saindo do sistema...');

    } else {
        console.log('Opção inválida! Por favor, digite um número de 1 a 6.');
    }
}
