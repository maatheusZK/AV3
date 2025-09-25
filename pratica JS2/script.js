let numeroSecreto; // O número que o jogador precisa adivinhar
let contadorDeChances = 1; // Começa na primeira chance
const MAX_CHANCES = 10; // Número máximo de chances

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarpalpite = document.querySelector ('#botaoEnviarPalpite');
const botaoReiniciar = document.querySelector('#botaoReiniciar');

const mensagemElement = document.querySelector('.mensagem');
const palpitesAnterioresElement = document.querySelector('.palpites-anteriores');
const dicaElement = document.querySelector('dica');
const chancesRestantesElement = document. querySelector('#chancesRestantes');

let listaDePalpites = [];

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log('Número Secreto (apenas para teste):', numeroSecreto);
    contadorDeChances = 1; // Resetar o contador de chances
 chancesRestantesElement.textContent = MAX_CHANCES; // Mostra o total de chances

 // Limpar as mensagens anteriores
 mensagemElement.textContent = '';
 palpitesAnterioresElement.textContent = '';
 dicaElement.textContent = '';
 listaDePalpites = []; // Limpa a lista de palpites

 // Resetar as cores das mensagens
 mensagemElement.style.color = '#f0f0f0'; // Cor padrão do texto
 dicaElement.style.color = '#ffeb3b'; // Cor padrão da dica

 campoPalpite.disabled = false; // Reativar o campo de palpite e o botão de enviar
 botaoEnviarpalpite.disabled = false;
 campoPalpite.value = ''; // Limpa o campo de entrada
 campoPalpite.focus(); // Colocar o cursor no campo para o usuário

 botaoReiniciar.classList.add('hidden'); // Esconder o botão de reiniciar
}