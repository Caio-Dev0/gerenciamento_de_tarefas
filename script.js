let contadorIdsTarefas = 0;
const botaoAdicionarTarefa = document.querySelector(".btn-add") 
const inputTarefa = document.querySelector("input") 
const containerListaTarefas = document.querySelector("ul") 
const meu_array = []


botaoAdicionarTarefa.addEventListener("click", adicionarTarefa) 

function recebeValorInput(){
    return inputTarefa.value.trim()
}

function limpaValorInput(){
    inputTarefa.value = ''
}

function criaItemTarefa(){
    let itemTarefa = containerListaTarefas.appendChild(document.createElement("li"))
    itemTarefa.setAttribute('id', contadorIdsTarefas)
    return itemTarefa
}

function criaBotaoRemover(container){
    let botaoRemoverTarefa = container.appendChild(document.createElement("button"))
    botaoRemoverTarefa.textContent = "X"
    botaoRemoverTarefa.setAttribute('class', `btn_remover${contadorIdsTarefas}`)
    botaoRemoverTarefa.addEventListener("click", deletarTarefa)
    return botaoRemoverTarefa
}
        
function adicionarTarefa(){
    const conteudoTarefa = recebeValorInput()
    if(conteudoTarefa != ''){
        const itemTarefa = criaItemTarefa()
        contadorIdsTarefas += 1;
        let meuObj = {nome: itemTarefa.textContent = conteudoTarefa, id: contadorIdsTarefas}
        meu_array.push(meuObj)
        console.log(meu_array)
        limpaValorInput()
        criaBotaoRemover(itemTarefa)        
    }else{
        alert("Coloque uma tarefa válida")
    }     
}


function deletarTarefa(evento){
    let botaoRemoverTarefa = evento.target; 
    let containerItemTarefa = botaoRemoverTarefa.parentNode;
    containerListaTarefas.removeChild(containerItemTarefa)
    contadorIdsTarefas -= 1;
}