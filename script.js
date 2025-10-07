let btn_addTarefa = document.querySelector(".btn-add") //Este é o botão que está sendo usado para chamar a função "adicionarTarefa"
let btn_delTarefa = document.querySelector(".btn-remove")

let inputTarefa = document.querySelector("input") // usei o querySelector para resgatar o input
btn_addTarefa.addEventListener("click", adicionarTarefa) //Evento que dispara a função adicionarTarefa ao ouvir o Click
btn_delTarefa.addEventListener("click", removerTarefa)
let contador = 0;
console.log(contador)
        
        
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
        btn_remove.innerText('X')
    }else{
        alert("Coloque uma tarefa válida")
    }    
    
}


function removerTarefa(){
    let itemLi = document.querySelector("li")
    itemLi.remove()
}

        
    