let contador_Ids_Tasks = 0;
let btn_AddTask = document.querySelector(".btn-add") 
let inputTask = document.querySelector("input") 
let container_TaskList = document.querySelector("ul") 

btn_AddTask.addEventListener("click", addTask) 

function recebeInput(){
    let valor_Input_Task = inputTask.value 
    valor_Input_Task = valor_Input_Task.trim()
    return valor_Input_Task
}

        
function addTask(){
    const valorInput = recebeInput()
    console.log(valorInput)
    contador_Ids_Tasks += 1;

    if(valorInput != ''){
        let task_Li = container_TaskList.appendChild(document.createElement("li"))
        let last_task = container_TaskList.lastElementChild
        task_Li.innerText = valorInput;
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
    container_TaskList.removeChild(container_Task_Li)
}

        
    