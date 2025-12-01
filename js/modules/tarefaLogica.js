import { criaItemTarefa } from "./manipulaDom.js";
import { salvarIdLocalstorage, salvarTarefasLocalstorage } from "./storage.js";
import { abrirPopUp, fechaPopUp} from "./ui.js";

let arrayTarefas = []
let contadorIdsTarefas = 0;
let tarefaSelecionada
let categoriaTarefa = {
    categoria: undefined,
    valorCategoria: undefined
}

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
    if(categoriaTarefa.categoria === undefined){
        alert("Coloque uma categoria de tarefa")
        return
    }
    contadorIdsTarefas = contadorIdsTarefas + 1;
    let objetoTarefa = {conteudo: conteudoTarefa.value, id: String(contadorIdsTarefas), categoria: categoriaTarefa.categoria, pesoCategoria: categoriaTarefa.valorCategoria}
    arrayTarefas.push(objetoTarefa)
    arrayTarefas.sort((a, b) => a.pesoCategoria - b.pesoCategoria)
    containerListaTarefas.textContent = ''
    arrayTarefas.forEach(atributo => {
        const itemTarefa = criaItemTarefa(atributo.conteudo, atributo.id, deletarTarefaClosure(containerListaTarefas), editarTarefaClosure(modal, inputEditar), atributo.categoria)
        containerListaTarefas.appendChild(itemTarefa)
    })
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
    let categoriaLabel = botaoRadio.parentNode.textContent.toLowerCase()
    if(categoriaLabel == 'urgente'){
        categoriaTarefa.categoria = categoriaLabel
        categoriaTarefa.valorCategoria = 1
    }else if(categoriaLabel == 'importante'){
        categoriaTarefa.categoria = categoriaLabel
        categoriaTarefa.valorCategoria = 2        
    }else{
        categoriaTarefa.categoria = categoriaLabel
        categoriaTarefa.valorCategoria = 3
    }
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
