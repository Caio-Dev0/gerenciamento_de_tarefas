import { criaItemTarefa } from "./manipulaDom.js";
import { salvarIdLocalstorage, salvarTarefasLocalstorage } from "./storage.js";

let arrayTarefas = []
let contadorIdsTarefas = 0;

function deletarTarefaCallback(containerListaTarefas){
    return function deletarTarefa(evento){
        const botao = evento.target;
        const itemTarefa = botao.parentNode;
        containerListaTarefas.removeChild(itemTarefa)
        arrayTarefas = arrayTarefas.filter(tarefa => tarefa.id !== itemTarefa.id)
        salvarTarefasLocalstorage(arrayTarefas)
    }
}

function adicionarTarefa(conteudoTarefa, containerListaTarefas){
    if(conteudoTarefa === ''){
        alert("Coloque uma tarefa válida")
        return
    }
    contadorIdsTarefas = contadorIdsTarefas + 1;
    const itemTarefa = criaItemTarefa(conteudoTarefa, String(contadorIdsTarefas), deletarTarefaCallback(containerListaTarefas), editarTarefa)
    containerListaTarefas.appendChild(itemTarefa)
    let objetoTarefa = {conteudo: conteudoTarefa, id: String(contadorIdsTarefas)}
    arrayTarefas.push(objetoTarefa)
    salvarTarefasLocalstorage(arrayTarefas)
    salvarIdLocalstorage(contadorIdsTarefas)
}


const editarTarefa = (evento) => a = console.log(evento.target)

function carregarTarefas(){
    const dadosArrayTarefas = JSON.parse(localStorage.getItem("Dados Tarefas"))
    arrayTarefas = dadosArrayTarefas
    return dadosArrayTarefas
}

function carregarId(){
    const contadorIdLocalstorage = JSON.parse(localStorage.getItem("Contador do ID"))
    contadorIdsTarefas = contadorIdLocalstorage
}

export {deletarTarefaCallback, adicionarTarefa, carregarTarefas, carregarId, editarTarefa}
