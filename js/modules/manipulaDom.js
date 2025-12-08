function criaItemTarefa(conteudo, id, deletarTarefa, editarTarefa, categoria){
    let itemTarefa = document.createElement("li")
    itemTarefa.setAttribute('id', id)
    itemTarefa.setAttribute("class", "itemTarefa")
    itemTarefa.classList.add(categoria)
    itemTarefa.textContent = conteudo
    const botaoRemover = criaBotaoRemover(deletarTarefa)
    const botaoEditar = criaBotaoEditar(editarTarefa)
    itemTarefa.appendChild(botaoRemover)
    itemTarefa.appendChild(botaoEditar)
    return itemTarefa
}

function criaBotaoRemover(deletarTarefa){
    const botaoRemoverTarefa = document.createElement("i")
    botaoRemoverTarefa.classList.add("btn-remover")
    botaoRemoverTarefa.classList.add("ti")
    botaoRemoverTarefa.classList.add("ti-square-rounded-x")
    botaoRemoverTarefa.addEventListener("click", deletarTarefa)
    return botaoRemoverTarefa;
}

function criaBotaoEditar(editarTarefa){
    const botaoEditarTarefa = document.createElement("i")
    botaoEditarTarefa.classList.add("btn-edit")
    botaoEditarTarefa.classList.add("ti")
    botaoEditarTarefa.classList.add("ti-edit")
    botaoEditarTarefa.addEventListener("click", editarTarefa)
    return botaoEditarTarefa;
}

export {criaItemTarefa, criaBotaoRemover}