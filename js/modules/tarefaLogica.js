function deletarTarefaCallback(containerListaTarefas, arrayTarefas){
    return function deletarTarefa(evento){
        const botao = evento.target;
        const itemTarefa = botao.parentNode;
        containerListaTarefas.removeChild(itemTarefa)
        arrayTarefas = arrayTarefas.filter(tarefa => tarefa.id !== itemTarefa.id)
    }
}

export {deletarTarefaCallback}
