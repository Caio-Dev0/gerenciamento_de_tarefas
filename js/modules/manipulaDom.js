function criaItemTarefa(conteudo, id, botao){
    let itemTarefa = document.createElement("li")
    itemTarefa.setAttribute('id', id)
    itemTarefa.setAttribute("class", "itemTarefa")
    itemTarefa.textContent = conteudo
    const botaoRemoverTarefa = botao
    itemTarefa.appendChild(botaoRemoverTarefa)
    return itemTarefa
}

export {criaItemTarefa}