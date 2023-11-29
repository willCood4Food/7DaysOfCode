// Pergunta 1: Área de interesse do usuário
// O usuário escolhe entre Front-End e Back-End
let area = prompt("Você quer seguir para a área de Front-End ou Back-End? Digite 'Front-End' ou 'Back-End'.");

if (area === "Front-End") {
    // Pergunta 2 para quem escolheu Front-End
    // O usuário escolhe entre React e Vue
    let tecnologiaFront = prompt("Você quer aprender React ou Vue? Digite 'React' ou 'Vue'.");
    alert(`Ótima escolha! Aprender ${tecnologiaFront} será divertido e desafiador.`);
} else if (area === "Back-End") {
    // Pergunta 2 para quem escolheu Back-End
    // O usuário escolhe entre C# e Java
    let tecnologiaBack = prompt("Você quer aprender C# ou Java? Digite 'C#' ou 'Java'.");
    alert(`Ótima escolha! Aprender ${tecnologiaBack} abrirá muitas portas no mundo do desenvolvimento.`);
} else {
    // Caso o usuário não digite uma resposta válida
    alert("Você não digitou uma área válida.");
}

// Pergunta 3: Especialização ou Fullstack
// O usuário escolhe entre se especializar na área escolhida ou se tornar Fullstack
let especializacao = prompt("Você quer seguir se especializando na área escolhida ou se tornar Fullstack? Digite 'Especializar' ou 'Fullstack'.");

if (especializacao === "Especializar") {
    // Resposta para quem escolheu se especializar
    alert("A especialização é uma ótima maneira de aprofundar seus conhecimentos!");
} else if (especializacao === "Fullstack") {
    // Resposta para quem escolheu se tornar Fullstack
    alert("Ser Fullstack te permite entender melhor todas as partes do desenvolvimento!");
} else {
    // Caso o usuário não digite uma resposta válida
    alert("Você não digitou uma opção válida.");
}

// Pergunta 4: Escolha de tecnologias adicionais
// O usuário pode adicionar várias tecnologias que deseja aprender
let tecnologiaExtra;
let tecnologiasParaAprender = [];

while (true) {
    // Pergunta repetida sobre aprender mais tecnologias
    tecnologiaExtra = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se não, digite 'não'.");

    // Se o usuário digitar "não", o loop é encerrado
    if (tecnologiaExtra.toLowerCase() === "não") {
        break;
    }

    // Adiciona a tecnologia escolhida à lista e mostra uma mensagem sobre a escolha
    tecnologiasParaAprender.push(tecnologiaExtra);
    alert(`Legal! ${tecnologiaExtra} é uma ótima escolha.`);
}

// Exibe a lista final de tecnologias que o usuário quer aprender
alert("Tecnologias que você quer aprender: " + tecnologiasParaAprender.join(", "));
