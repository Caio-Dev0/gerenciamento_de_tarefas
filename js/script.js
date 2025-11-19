import { criaItemTarefa} from "./modules/manipulaDom.js";
import { adicionarTarefa, carregarTarefas, carregarId, deletarTarefaClosure } from "./modules/tarefaLogica.js";


const botaoAdicionarTarefa = document.querySelector(".btn-add") 
const inputTarefa = document.querySelector("input") 
const containerListaTarefas = document.querySelector("ul") 
let dadosArrayTarefas = carregarTarefas()
const modaltarefa = document.querySelector(".edit-task-modal")

botaoAdicionarTarefa.addEventListener("click", () =>{
    adicionarTarefa(inputTarefa, containerListaTarefas, modaltarefa)
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


