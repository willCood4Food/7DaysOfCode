// Função para somar dois números
function somar(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtrair(a, b) {
    return a - b;
}

// Função para multiplicar dois números
function multiplicar(a, b) {
    return a * b;
}

// Função para dividir dois números
function dividir(a, b) {
    // Verifica se o divisor é zero para evitar divisão por zero
    if (b === 0) {
        return "Não é possível dividir por zero";
    } else {
        return a / b;
    }
}

// Loop principal da calculadora
while (true) {
    // Solicita ao usuário escolher uma operação
    let operacao = prompt("Escolha uma operação: soma, subtração, multiplicação, divisão ou sair");

    // Encerra o programa se o usuário escolher 'sair'
    if (operacao.toLowerCase() === "sair") {
        alert("Até a próxima!");
        break;
    }

    // Solicita os dois números para a operação
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    let resultado;

    // Executa a operação com base na escolha do usuário
    switch (operacao.toLowerCase()) {
        case "soma":
            resultado = somar(num1, num2);
            break;
        case "subtração":
            resultado = subtrair(num1, num2);
            break;
        case "multiplicação":
            resultado = multiplicar(num1, num2);
            break;
        case "divisão":
            resultado = dividir(num1, num2);
            break;
        default:
            alert("Operação inválida. Tente novamente.");
            continue;
    }

    // Exibe o resultado da operação
    alert("Resultado: " + resultado);
}

