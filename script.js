let btn_addTarefa = document.querySelector(".btn-add") //Este é o botão que está sendo usado para chamar a função "adicionarTarefa"
let btn_delTarefa = document.querySelector(".btn-remove")

let inputTarefa = document.querySelector("input") // usei o querySelector para resgatar o input
btn_addTarefa.addEventListener("click", adicionarTarefa) //Evento que dispara a função adicionarTarefa ao ouvir o Click
btn_delTarefa.addEventListener("click", removerTarefa)
        
        
function adicionarTarefa(){
    let escopoUl = document.querySelector("ul") // Criei uma váriavel que irá armazenar a tag ul
    let valorInputTarefa = inputTarefa.value // atribui a esta váriavel o valor do input
    let itemLi = escopoUl.appendChild(document.createElement("li")) // Atribui a váriavel "novaTarefa" o novo elemento "li" criado na "ul" listaTarefas
    itemLi.innerText = valorInputTarefa;
    
}

function removerTarefa(){
    let itemLi = document.querySelector("li")
    itemLi.remove()
}

        
        

