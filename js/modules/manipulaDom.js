function criaItemTarefa(conteudo, id, deletarTarefa, editarTarefa, categoria){
    let itemTarefa = document.createElement("li")
    itemTarefa.setAttribute('id', id)
    itemTarefa.setAttribute("class", "itemTarefa")
    itemTarefa.setAttribute("class", categoria)
    itemTarefa.textContent = conteudo
    const botaoRemover = criaBotaoRemover(deletarTarefa)
    const botaoEditar = criaBotaoEditar(editarTarefa)
    itemTarefa.appendChild(botaoRemover)
    itemTarefa.appendChild(botaoEditar)
    return itemTarefa
}

function criaBotaoRemover(deletarTarefa){
    const botaoRemoverTarefa = document.createElement("button")
    botaoRemoverTarefa.textContent = "X"
    botaoRemoverTarefa.classList.add("btn-remover")
    botaoRemoverTarefa.addEventListener("click", deletarTarefa)
    return botaoRemoverTarefa;
}

function criaBotaoEditar(editarTarefa){
    const botaoEditarTarefa = document.createElement("button")
    botaoEditarTarefa.textContent = "🪶"
    botaoEditarTarefa.classList.add("btn-edit")
    botaoEditarTarefa.addEventListener("click", editarTarefa)
    return botaoEditarTarefa;
}

export {criaItemTarefa, criaBotaoRemover}