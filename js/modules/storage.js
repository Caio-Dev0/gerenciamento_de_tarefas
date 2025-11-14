function salvarTarefasLocalstorage(arrayTarefas){
    localStorage.setItem("Dados Tarefas", JSON.stringify(arrayTarefas))
}

function salvarIdLocalstorage(contadorIdsTarefas){
    localStorage.setItem("Contador do ID", JSON.stringify(contadorIdsTarefas))
}

export {salvarIdLocalstorage, salvarTarefasLocalstorage}