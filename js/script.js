import { criaItemTarefa} from "./modules/manipulaDom.js";
import { adicionarTarefa, carregarTarefas, carregarId, deletarTarefaClosure, atualizarTarefa, editarTarefaClosure} from "./modules/tarefaLogica.js";
import { fechaPopUp } from "./modules/ui.js";

const botaoAdicionarTarefa = document.querySelector(".btn-add") 
const inputTarefa = document.querySelector("input") 
const containerListaTarefas = document.querySelector("ul") 
let dadosArrayTarefas = carregarTarefas()
const modaltarefa = document.querySelector(".edit-task-modal")
const botaoCancelaModal = document.querySelector(".btn-cancel")
const inputEditaTarefa = document.querySelector("#task-edit-input")
const botaoAtualizaTarefa = document.querySelector(".btn-update")

botaoAdicionarTarefa.addEventListener("click", () =>{
    adicionarTarefa(inputTarefa, containerListaTarefas, modaltarefa, inputEditaTarefa)
}) 

botaoCancelaModal.addEventListener('click', () =>{
    fechaPopUp(modaltarefa)
})

botaoAtualizaTarefa.addEventListener('click', () =>{
    atualizarTarefa(inputEditaTarefa, modaltarefa)
})

function inicializarAplicacao(){
    for (const atributo of dadosArrayTarefas){
        const itemTarefa = criaItemTarefa(atributo.conteudo, atributo.id, deletarTarefaClosure(containerListaTarefas), editarTarefaClosure(modaltarefa, inputEditaTarefa))
        containerListaTarefas.appendChild(itemTarefa)
    }
}

carregarTarefas()
carregarId()
inicializarAplicacao()


