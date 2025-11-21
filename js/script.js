import { criaItemTarefa} from "./modules/manipulaDom.js";
import { adicionarTarefa, carregarTarefas, carregarId, deletarTarefaClosure, fechaPopUp} from "./modules/tarefaLogica.js";


const botaoAdicionarTarefa = document.querySelector(".btn-add") 
const inputTarefa = document.querySelector("input") 
const containerListaTarefas = document.querySelector("ul") 
let dadosArrayTarefas = carregarTarefas()
const modaltarefa = document.querySelector(".edit-task-modal")
const botaoCancelaModal = document.querySelector(".btn-cancel")
const inputEditaTarefa = document.querySelector("#task-edit-input")


botaoAdicionarTarefa.addEventListener("click", () =>{
    adicionarTarefa(inputTarefa, containerListaTarefas, modaltarefa, inputEditaTarefa)
}) 

botaoCancelaModal.addEventListener('click', () =>{
    fechaPopUp(modaltarefa)
})

function inicializarAplicacao(){
    for (const atributo of dadosArrayTarefas){
        const itemTarefa = criaItemTarefa(atributo.conteudo, atributo.id, deletarTarefaClosure(containerListaTarefas))
        containerListaTarefas.appendChild(itemTarefa)
    }
}

carregarTarefas()
carregarId()
inicializarAplicacao()


