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
    console.log(contadorIdsTarefas)
    const itemTarefa = criaItemTarefa(conteudoTarefa, String(contadorIdsTarefas), deletarTarefaCallback(containerListaTarefas))
    containerListaTarefas.appendChild(itemTarefa)
    let objetoTarefa = {conteudo: conteudoTarefa, id: String(contadorIdsTarefas)}
    arrayTarefas.push(objetoTarefa)
    console.log(arrayTarefas)
    // limpaValorInput()
    salvarTarefasLocalstorage(arrayTarefas)
    salvarIdLocalstorage(contadorIdsTarefas)
}

export {deletarTarefaCallback, adicionarTarefa}
