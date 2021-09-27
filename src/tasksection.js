import { objectsArray } from "./addproject";
import { searchIndexOfProject } from "./sidebarDom";
import { createSubtask } from "./tasksectionDom";
import { populateSubtask } from "./tasksectionDom";

const inputTask = document.querySelector(".input-task");

// Enter task 
inputTask.addEventListener("keydown",(e)=>{
    if(e.keyCode == 13){
        let subtask = inputTask.value;
        updateSubtask(subtask);
        inputTask.value = "";     
        createSubtask(subtask);
        // get the project's name to get index of project in array to get subtasks 
        objectsArray
        populateSubtask()
    }  
})

// Updating the array 
function updateSubtask(subtask){
    const header = document.querySelector(".heading");
    let val = header.textContent; 
    let i = searchIndexOfProject(val);
    objectsArray[i].subtasks.push(subtask);
    console.log(objectsArray);
}
export{updateSubtask}