let contador_Ids_Tasks = 0;
let btn_Add_Task = document.querySelector(".btn-add") 
let input_Task = document.querySelector("input") 
let container_Task_List = document.querySelector("ul") 
const meu_array = [ ]


btn_Add_Task.addEventListener("click", addTask) 

function recebe_Valor_Input(){
    let valor_Input_Task = input_Task.value 
    valor_Input_Task = valor_Input_Task.trim()
    return valor_Input_Task
}

function cria_Li(){
    let task_Li = container_Task_List.appendChild(document.createElement("li"))
    task_Li.setAttribute('id', contador_Ids_Tasks)
    return task_Li
}

function limpar_Valor_Input(){
    input_Task.value = ''
}

function criar_Botão_Remover(container){
    let btn_Remove_Task = container.appendChild(document.createElement("button"))
    btn_Remove_Task.textContent = "X"
    btn_Remove_Task.setAttribute('class', `btn_remover${contador_Ids_Tasks}`)
    btn_Remove_Task.addEventListener("click", deleteTask)
    return btn_Remove_Task
}
        
function addTask(){
    const conteudo_Task = recebe_Valor_Input()
    if(conteudo_Task != ''){
        const task_Li = cria_Li()
        contador_Ids_Tasks += 1;
        ;
        let meuObj = {nome: task_Li.innerText = conteudo_Task, id: contador_Ids_Tasks}
        meu_array.push(meuObj)
        console.log(meu_array)
        limpar_Valor_Input()
        criar_Botão_Remover(task_Li)        
    }else{
        alert("Coloque uma tarefa válida")
    }     
}


function deleteTask(evento){
    let btn_Remove_Task = evento.target; 
    let container_Task_Li = btn_Remove_Task.parentNode;
    container_Task_List.removeChild(container_Task_Li)
    contador_Ids_Tasks -= 1;
}