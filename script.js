let contador_Ids_Tasks = 0;
let btn_AddTask = document.querySelector(".btn-add") 
let inputTask = document.querySelector("input") 

btn_AddTask.addEventListener("click", addTask) 



        
function addTask(){
    let container_TaskList = document.querySelector("ul") // Criei uma váriavel que irá armazenar a tag ul
    let valor_Input_Task = inputTask.value // atribui a esta váriavel o valor do input
    valor_Input_Task = valor_Input_Task.trim()
    contador_Ids_Tasks += 1;

    if(valor_Input_Task != ''){
        let task_Li = container_TaskList.appendChild(document.createElement("li"))
        let last_task = container_TaskList.lastElementChild
        task_Li.innerText = valor_Input_Task;
        inputTask.value = ''
        task_Li.setAttribute('id', contador_Ids_Tasks)
        let btn_Remove_Task = last_task.appendChild(document.createElement("button"))
        btn_Remove_Task.textContent = "X"
        btn_Remove_Task.setAttribute('class', `btn_remover${contador_Ids_Tasks}`)
        btn_Remove_Task.addEventListener("click", deleteTask)
    }else{
        alert("Coloque uma tarefa válida")
    }    
}


function deleteTask(evento){
    let btn_Remove_Task = evento.target; 
    let container_Task_Li = btn_Remove_Task.parentNode;
    let container_TaskList = document.querySelector("ul")
    container_TaskList.removeChild(container_Task_Li)
}

        
    