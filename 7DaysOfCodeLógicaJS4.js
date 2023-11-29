// Escolhendo um número aleatório entre 0 e 10
let numeroSecreto = Math.floor(Math.random() * 11);

// Definindo o número de tentativas que o usuário tem
let tentativas = 3;

// Iniciando um loop que continua enquanto houver tentativas restantes
while (tentativas > 0) {
    // Pede ao usuário para fazer um chute
    let chute = prompt("Adivinhe o número que estou pensando. Está entre 0 e 10.");

    // Convertendo o chute de uma string para um número
    chute = Number(chute);

    // Verifica se o chute é igual ao número secreto
    if (chute === numeroSecreto) {
        // Usuário acertou o número
        alert("Parabéns! Você acertou o número.");
        break; // Interrompe o loop se o usuário acertar
    } else {
        // Usuário errou o número
        tentativas--; // Reduz o número de tentativas restantes

        // Verifica se ainda restam tentativas e informa ao usuário
        if (tentativas > 0) {
            alert("Que pena! Você errou. Tente novamente. Você ainda tem " + tentativas + " tentativas.");
        }
    }
}

// Se o loop terminar sem que o usuário acerte, informa o número secreto
if (tentativas === 0) {
    alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto + ".");
}
