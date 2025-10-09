let contador = 0;
let btn_addTarefa = document.querySelector(".btn-add") 
let inputTarefa = document.querySelector("input") 

btn_addTarefa.addEventListener("click", adicionarTarefa) 



        
function adicionarTarefa(){
    let escopoUl = document.querySelector("ul") // Criei uma váriavel que irá armazenar a tag ul
    let valorInputTarefa = inputTarefa.value // atribui a esta váriavel o valor do input
    contador += 1;
    
    if(valorInputTarefa != ''){
        let itemLi = escopoUl.appendChild(document.createElement("li"))
        let last_task = escopoUl.lastElementChild
        itemLi.innerText = valorInputTarefa;
        itemLi.setAttribute('id', contador)
        let btn_remove = last_task.appendChild(document.createElement("button"))
        btn_remove.textContent = "X"
        btn_remove.setAttribute('class', `btn_remover${contador}`)
        btn_remove.addEventListener("click", removerTarefa) //Não entendi

    }else{
        alert("Coloque uma tarefa válida")
    }    
}


function removerTarefa(evento){
    let botaoClicado = evento.target; // Não entendi
    let elementoPai = botaoClicado.parentNode;
    let escopoUl = document.querySelector("ul")
    escopoUl.removeChild(elementoPai)
}

        
    