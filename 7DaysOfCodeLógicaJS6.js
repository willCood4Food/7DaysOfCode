let listaDeCompras = [];

while (true) {
    // Perguntando ao usuário se deseja adicionar ou remover um item, ou sair
    let acao = prompt("Você deseja 'adicionar' ou 'remover' um item da lista de compras, ou 'sair' do programa?");

    // Encerra o loop se o usuário digitar "sair"
    if (acao.toLowerCase() === "sair") {
        break;
    }

    if (acao.toLowerCase() === "adicionar") {
        // Adicionando um item à lista
        let item = prompt("Qual item você deseja adicionar à lista?");
        listaDeCompras.push(item);
        alert("Item adicionado: " + item);
    } else if (acao.toLowerCase() === "remover") {
        // Verificando se a lista está vazia
        if (listaDeCompras.length === 0) {
            alert("A lista está vazia. Não há o que remover.");
            continue;
        }

        // Removendo um item da lista
        let itemParaRemover = prompt("Qual item você deseja remover? " + listaDeCompras.join(", "));
        
        // Verifica se o item está na lista
        if (listaDeCompras.includes(itemParaRemover)) {
            let index = listaDeCompras.indexOf(itemParaRemover);
            listaDeCompras.splice(index, 1); // Remove o item da lista
            alert("Item removido: " + itemParaRemover);
        } else {
            alert("Não foi possível encontrar o item dentro da lista!");
        }
    } else {
        alert("Ação não reconhecida. Tente novamente.");
    }

    // Exibindo a lista atualizada
    alert("Lista de compras atual: " + listaDeCompras.join(", "));
}

// Exibindo a lista final
alert("Sua lista de compras final: " + listaDeCompras.join(", "));
