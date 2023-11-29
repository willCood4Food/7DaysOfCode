// Pergunta 1: Nome do usuário
const nome = prompt("Qual o seu nome?");

// Pergunta 2: Idade do usuário
const idade = prompt("Quantos anos você tem?");

// Pergunta 3: Linguagem de programação
const linguagem = prompt("Qual linguagem de programação você está estudando?");

// Exibindo a mensagem com as respostas
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

// Exercício opcional: perguntar se o usuário gosta da linguagem
const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

// Resposta dependendo da escolha do usuário
if (gosta == '1') {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (gosta == '2') {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
    alert("Resposta não reconhecida.");
}