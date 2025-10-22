let contadorIdsTarefas = 0;
const botaoAdicionarTarefa = document.querySelector(".btn-add") 
const inputTarefa = document.querySelector("input") 
const containerListaTarefas = document.querySelector("ul") 
let meu_array = []


botaoAdicionarTarefa.addEventListener("click", adicionarTarefa) 

function recebeValorInput(){
    return inputTarefa.value.trim() //Transnformar em Arrow function
}

function limpaValorInput(){
    inputTarefa.value = '' //Transnformar em Arrow function
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
    let meuObj = {nome: itemTarefa.textContent, id: String(contadorIdsTarefas)}
    meu_array.push(meuObj)
    console.log(meu_array)
    limpaValorInput()
}



function deletarTarefa(evento){
    const botao = evento.target;
    const item = botao.parentNode;
    containerListaTarefas.removeChild(item)
    meu_array = meu_array.filter(produto => produto.id !== item.id) // Entender fluxo 
    console.log(meu_array)
}

