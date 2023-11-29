// Inicializando arrays para armazenar itens de diferentes categorias
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
// Variável para controlar o loop principal
let continuar = true;

// Loop principal que continua até o usuário decidir parar
while (continuar) {
    // Perguntando ao usuário se deseja adicionar um item à lista
    let adicionarItem = prompt("Você deseja adicionar um item na sua lista de compras? Responda 'sim' ou 'não'.");

    // Verifica se o usuário não quer mais adicionar itens
    if (adicionarItem.toLowerCase() === "não") {
        continuar = false; // Encerra o loop
        break;
    }

    // Pergunta o nome do item que o usuário deseja adicionar
    let item = prompt("Qual comida você deseja inserir?");

    // Pergunta em qual categoria o item se encaixa
    let categoria = prompt("Em qual categoria essa comida se encaixa? Opções: frutas, laticínios, congelados, doces");

    // Adiciona o item na categoria correspondente
    switch (categoria.toLowerCase()) {
        case "frutas":
            frutas.push(item); // Adiciona o item ao array de frutas
            break;
        case "laticínios":
            laticinios.push(item); // Adiciona o item ao array de laticínios
            break;
        case "congelados":
            congelados.push(item); // Adiciona o item ao array de congelados
            break;
        case "doces":
            doces.push(item); // Adiciona o item ao array de doces
            break;
        default:
            alert("Categoria não reconhecida. Tente novamente.");
            break;
    }
}

// Exibe a lista de compras organizada por categoria
alert("Lista de compras:\n" +
    "    Frutas: " + frutas.join(", ") + "\n" +
    "    Laticínios: " + laticinios.join(", ") + "\n" +
    "    Congelados: " + congelados.join(", ") + "\n" +
    "    Doces: " + doces.join(", "));
