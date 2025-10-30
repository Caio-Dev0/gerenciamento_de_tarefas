let contadorIdsTarefas = 0;
const botaoAdicionarTarefa = document.querySelector(".btn-add") 
const inputTarefa = document.querySelector("input") 
const containerListaTarefas = document.querySelector("ul") 
let arrayDeTarefas = []


botaoAdicionarTarefa.addEventListener("click", adicionarTarefa) 

function salvarDadosLocalstorage(){
    localStorage.setItem("Dados Tarefas", JSON.stringify(arrayDeTarefas))
}

function salvarIdLocalstorage(){
    localStorage.setItem("Contador do ID", JSON.stringify(contadorIdsTarefas))
}

function recebeValorInput(){
    return inputTarefa.value.trim() 
}

function limpaValorInput(){
    inputTarefa.value = ''
}

function criaBotaoRemover(){
    const botaoRemoverTarefa = document.createElement("button")
    botaoRemoverTarefa.textContent = "X"
    botaoRemoverTarefa.classList.add("btn-remover")
    botaoRemoverTarefa.addEventListener("click", deletarTarefa)
    return botaoRemoverTarefa
}

function criaItemTarefa(conteudo){
    let itemTarefa = document.createElement("li")
    itemTarefa.setAttribute('id', contadorIdsTarefas)
    itemTarefa.textContent = conteudo
    const botaoRemoverTarefa = criaBotaoRemover()
    itemTarefa.appendChild(botaoRemoverTarefa)
    return itemTarefa
}

function adicionarTarefa(){
    const conteudoTarefa = recebeValorInput()
    if(conteudoTarefa === ''){
        alert("Coloque uma tarefa válida")
        return
    } 
    contadorIdsTarefas += 1;
    const itemTarefa = criaItemTarefa(conteudoTarefa)
    containerListaTarefas.appendChild(itemTarefa)
    let objetoTarefa = {conteudo: itemTarefa.textContent, id: String(contadorIdsTarefas)}
    arrayDeTarefas.push(objetoTarefa)
    limpaValorInput()
    salvarDadosLocalstorage()
    salvarIdLocalstorage()

}



function deletarTarefa(chamadaDaFuncao){
    const botao = chamadaDaFuncao.target;
    const item = botao.parentNode;
    containerListaTarefas.removeChild(item)
    arrayDeTarefas = arrayDeTarefas.filter(itemDoArray => itemDoArray.id !== item.id)
    salvarDadosLocalstorage()
}

function resgatarTarefasLocalstorage(){
    const dadosArrayTarefas = JSON.parse(localStorage.getItem("Dados Tarefas"))
    for (const i of dadosArrayTarefas){
        const teste = criaItemTarefa(i.conteudo)
        containerListaTarefas.appendChild(teste)
    }
}

