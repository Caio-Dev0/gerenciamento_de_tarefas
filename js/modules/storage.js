const salvarTarefasLocalstorage = (arrayTarefas) => localStorage.setItem("Dados Tarefas", JSON.stringify(arrayTarefas))

const salvarIdLocalstorage = (contadorIdsTarefas) => localStorage.setItem("Contador do ID", JSON.stringify(contadorIdsTarefas))


export {salvarIdLocalstorage, salvarTarefasLocalstorage}