import { criaItemTarefa} from "./modules/manipulaDom.js";
import { adicionarTarefa, carregarTarefas, carregarId, deletarTarefaClosure, atualizarTarefa, editarTarefaClosure, definePrioridade} from "./modules/tarefaLogica.js";
import { fechaPopUp } from "./modules/ui.js";

const botaoAdicionarTarefa = document.querySelector(".task-form__button") 
const inputTarefa = document.querySelector(".task-form__input") 
const containerListaTarefas = document.querySelector("ul") 
let dadosArrayTarefas = carregarTarefas()
const modaltarefa = document.querySelector(".modal-edit")
const botaoCancelaModal = document.querySelector(".modal-edit__button--cancel")
const inputEditaTarefa = document.querySelector("#task-edit-input")
const botaoAtualizaTarefa = document.querySelector(".modal-edit__button--update")
const botoesPrioridade = document.querySelectorAll("input[type='radio']")

botaoAdicionarTarefa.addEventListener("click", () =>{
    adicionarTarefa(inputTarefa, containerListaTarefas, modaltarefa, inputEditaTarefa)
}) 

botaoCancelaModal.addEventListener('click', () =>{
    fechaPopUp(modaltarefa)
})

botaoAtualizaTarefa.addEventListener('click', () =>{
    atualizarTarefa(inputEditaTarefa, modaltarefa)
})

botoesPrioridade.forEach(a => a.addEventListener("click", definePrioridade))

function inicializarAplicacao(){
    for (const atributo of dadosArrayTarefas){
        const itemTarefa = criaItemTarefa(atributo.conteudo, atributo.id, deletarTarefaClosure(containerListaTarefas), editarTarefaClosure(modaltarefa, inputEditaTarefa), atributo.categoria)
        containerListaTarefas.appendChild(itemTarefa)
    }
}

carregarTarefas()
carregarId()
inicializarAplicacao()

