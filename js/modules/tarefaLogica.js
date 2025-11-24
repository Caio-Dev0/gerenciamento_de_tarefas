import { criaItemTarefa } from "./manipulaDom.js";
import { salvarIdLocalstorage, salvarTarefasLocalstorage } from "./storage.js";
import { abrirPopUp} from "./ui.js";

let arrayTarefas = []
let contadorIdsTarefas = 0;

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
    contadorIdsTarefas = contadorIdsTarefas + 1;
    const itemTarefa = criaItemTarefa(conteudoTarefa.value, String(contadorIdsTarefas), deletarTarefaClosure(containerListaTarefas), editarTarefaClosure(modal, inputEditar))
    containerListaTarefas.appendChild(itemTarefa)
    let objetoTarefa = {conteudo: conteudoTarefa.value, id: String(contadorIdsTarefas)}
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
        const conteudotarefa = itemTarefa.firstChild.textContent
        inputEditar.value = conteudotarefa
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

export {deletarTarefaClosure, adicionarTarefa, carregarTarefas, carregarId, editarTarefaClosure}
