import { criaItemTarefa } from "./manipulaDom.js";
import { salvarIdLocalstorage, salvarTarefasLocalstorage } from "./storage.js";
import { abrirPopUp, fechaPopUp} from "./ui.js";

let arrayTarefas = []
let contadorIdsTarefas = 0;
let tarefaSelecionada
let categoriaSelecionada

function deletarTarefaClosure(containerListaTarefas){
    return function deletarTarefa(evento){
        const botao = evento.target;
        const itemTarefa = botao.parentNode;
        containerListaTarefas.removeChild(itemTarefa)
        arrayTarefas = arrayTarefas.filter(tarefa => tarefa.id !== itemTarefa.id)
        salvarTarefasLocalstorage(arrayTarefas)
    }
}

function adicionarTarefa(conteudoTarefa, containerListaTarefas, modal, inputEditar){
    if(conteudoTarefa.value === ''){
        alert("Coloque uma tarefa válida")
        return
    }
    if(categoriaSelecionada === undefined){
        alert("Coloque uma categoria de tarefa")
        return
    }
    contadorIdsTarefas = contadorIdsTarefas + 1;
    const itemTarefa = criaItemTarefa(conteudoTarefa.value, String(contadorIdsTarefas), deletarTarefaClosure(containerListaTarefas), editarTarefaClosure(modal, inputEditar), categoriaSelecionada)
    containerListaTarefas.appendChild(itemTarefa)
    let objetoTarefa = {conteudo: conteudoTarefa.value, id: String(contadorIdsTarefas), categoria: categoriaSelecionada}
    arrayTarefas.push(objetoTarefa)
    conteudoTarefa.value = ''
    salvarTarefasLocalstorage(arrayTarefas)
    salvarIdLocalstorage(contadorIdsTarefas)
}

function editarTarefaClosure(modal, inputEditar){
    return function editarTarefa(evento){ 
        abrirPopUp(modal)
        const botaoEditarTarefa = evento.target
        const itemTarefa = botaoEditarTarefa.parentNode
        tarefaSelecionada = itemTarefa
        const conteudotarefa = itemTarefa.firstChild.textContent
        inputEditar.value = conteudotarefa
    }
}


function atualizarTarefa(inputEditar, modal){
    const conteudoInput = inputEditar.value
    if(conteudoInput == ''){
        alert("Mude para uma tarefa válida")
        return
    }
    const novaTarefa = arrayTarefas.find(a => a.id == tarefaSelecionada.id)
    novaTarefa.conteudo = conteudoInput
    tarefaSelecionada.firstChild.textContent = conteudoInput
    salvarTarefasLocalstorage(arrayTarefas)
    fechaPopUp(modal)
}

function definePrioridade(evento){
    const botaoRadio = evento.target
    categoriaSelecionada = botaoRadio.parentNode.textContent.toLowerCase()
}


function carregarTarefas(){
    const dadosArrayTarefas = JSON.parse(localStorage.getItem("Dados Tarefas"))
    arrayTarefas = dadosArrayTarefas
    return dadosArrayTarefas
}

function carregarId(){
    const contadorIdLocalstorage = JSON.parse(localStorage.getItem("Contador do ID"))
    contadorIdsTarefas = contadorIdLocalstorage
}

export {deletarTarefaClosure, adicionarTarefa, carregarTarefas, carregarId, editarTarefaClosure, atualizarTarefa, definePrioridade}
