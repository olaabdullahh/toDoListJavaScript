let input = document.querySelector(".input");
let tasks =[
    {
        title: "test",
        id: Date.now(),
        isDone: false,
    }
]

function getTasksFromStorage(){
    let retrieved = JSON.parse(localStorage.getItem("tasks"));
    tasks = retrieved ?? []
}
getTasksFromStorage();

function fillTasks(){
    document.getElementById("tasks").innerHTML = "";
    let index = 0
    for(task of tasks){
        let content =  `<div class="bg"> <span>${task.title}</span>
        <button onclick="deletTask(${index})" class="delet">Delet</button>
       </div>`;
        document.getElementById("tasks").innerHTML += content
        index++
    }  
}

fillTasks()
document.getElementById("btn").addEventListener("click" , function(){
    let taskobj =   {
        title: input.value,
        id: Date.now(),
        isDone: false,
    }
    if(input.value !== ""){
        tasks.push(taskobj)
        setTaskInLocalStorage();
        input.value = ""
            }

        fillTasks()
})
function deletTask(id){
    let taskdelet = tasks[id]
    let comfired = confirm("هل انت متأكد من حذف مهمة : " + taskdelet.title)
    if(comfired){
        tasks.splice(id , 1)
        setTaskInLocalStorage();
        fillTasks();
    }

}
function setTaskInLocalStorage(){
    localStorage.setItem("tasks" , JSON.stringify(tasks))
}
    
   
