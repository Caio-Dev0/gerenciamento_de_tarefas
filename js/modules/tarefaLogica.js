import { criaItemTarefa } from "./manipulaDom.js";

let arrayTarefas = []


function deletarTarefaCallback(containerListaTarefas){
    return function deletarTarefa(evento){
        const botao = evento.target;
        const itemTarefa = botao.parentNode;
        containerListaTarefas.removeChild(itemTarefa)
        arrayTarefas = arrayTarefas.filter(tarefa => tarefa.id !== itemTarefa.id)
        console.log(arrayTarefas)
    }
}

function adicionarTarefa(conteudoTarefa, contadorIdsTarefas, containerListaTarefas){
    if(conteudoTarefa === ''){
        alert("Coloque uma tarefa válida")
        return
    }
    contadorIdsTarefas += 1;
    const itemTarefa = criaItemTarefa(conteudoTarefa, String(contadorIdsTarefas), deletarTarefaCallback(containerListaTarefas))
    containerListaTarefas.appendChild(itemTarefa)
    let objetoTarefa = {conteudo: conteudoTarefa, id: String(contadorIdsTarefas)}
    arrayTarefas.push(objetoTarefa)
    console.log(arrayTarefas)
    // limpaValorInput()
    // salvarTarefasLocalstorage()
    // salvarIdLocalstorage()
}

export {deletarTarefaCallback, adicionarTarefa}
