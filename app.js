// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo Número aleatorio';

// let parag = document.querySelector('p');
// parag.innerHTML = 'Escolha um número entre 1 e 10';

let numSecreto = gerarNumAle();
let tentativas = 1;

function exibirTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTela('h1', 'Jogo Chute');
    exibirTela('p', 'Escolha um número entre 1 a 10');
}

exibirMensagemInicial();

function verifChute() {
    let chute = parseInt(document.querySelector('input').value, 10);

    if (isNaN(chute)) {
        exibirTela('p', 'Por favor, insira um número válido.');
        return;
    }

    if (chute === numSecreto) {
        exibirTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTela('p', mensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numSecreto) {
            exibirTela('p', 'O número secreto é menor');
        } else {
            exibirTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumAle() {
    return Math.floor(Math.random() * 10) + 1;
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarNumAle();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
