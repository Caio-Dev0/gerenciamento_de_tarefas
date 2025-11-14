import { criaItemTarefa} from "./modules/manipulaDom.js";
import { adicionarTarefa } from "./modules/tarefaLogica.js";

let contadorIdsTarefas = 0;
const botaoAdicionarTarefa = document.querySelector(".btn-add") 
const inputTarefa = document.querySelector("input") 
const containerListaTarefas = document.querySelector("ul") 




botaoAdicionarTarefa.addEventListener("click", () =>{
    adicionarTarefa(valorInput, contadorIdsTarefas, containerListaTarefas)
}) 


function valorInput() {
    const abc = inputTarefa.value.trim() 
    return  abc
} 


function salvarTarefasLocalstorage(){
    localStorage.setItem("Dados Tarefas", JSON.stringify(arrayTarefas))
}

function salvarIdLocalstorage(){
    localStorage.setItem("Contador do ID", JSON.stringify(contadorIdsTarefas))
}


function limpaValorInput(){
    inputTarefa.value = ''
}







function resgatarTarefasLocalstorage(){
    const dadosArrayTarefas = JSON.parse(localStorage.getItem("Dados Tarefas"))
    for (const atributo of dadosArrayTarefas){
        const itemTarefa = criaItemTarefa(atributo.conteudo)
        itemTarefa.setAttribute("id", atributo.id)
        const objetoTarefa = {conteudo: atributo.conteudo, id: atributo.id}
        arrayTarefas.push(objetoTarefa)
        containerListaTarefas.appendChild(itemTarefa)
    }
}

function resgatarContadorIdLocalstorage(){
    const contadorIdLocalstorage = JSON.parse(localStorage.getItem("Contador do ID"))
    contadorIdsTarefas = contadorIdLocalstorage
    console.log(contadorIdsTarefas)
}



// resgatarTarefasLocalstorage()
// resgatarContadorIdLocalstorage()




