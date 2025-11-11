function criaItemTarefa(conteudo, id){
    let itemTarefa = document.createElement("li")
    itemTarefa.setAttribute('id', id)
    itemTarefa.setAttribute("class", "itemTarefa")
    itemTarefa.textContent = conteudo
    const botaoRemover = criaBotaoRemover()
    itemTarefa.appendChild(botaoRemover)
    return itemTarefa
}

function criaBotaoRemover(deletarTarefa){
    const botaoRemoverTarefa = document.createElement("button")
    botaoRemoverTarefa.textContent = "X"
    botaoRemoverTarefa.classList.add("btn-remover")
    // botaoRemoverTarefa.addEventListener("click", deletarTarefa)
    return botaoRemoverTarefa;
}

export {criaItemTarefa, criaBotaoRemover}