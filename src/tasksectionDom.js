import { objectsArray } from "./addproject";
// import { searchIndexOfProject } from "./sidebarDom";

const h1 = document.querySelector(".heading");
const description = document.querySelector("#description");

// Displays name of project in task section which is clicked in sidebar 
const populateTaskSection = (index)=>{
    // const ul = document.querySelector(".subtasks-ul");

    h1.innerText = objectsArray[index].projectName;
    description.innerText = objectsArray[index].description;
    console.log(`${index}  clicked`);
}
const populateSubtask = (index)=>{
    // if()
    // let numberOfItems = objectsArray[index].subtask.Length;
    console.log(objectsArray[index].subtask)
    // for(let x = 0; x< numberOfItems; x++){
    //     createSubtask(objectsArray[index].subtask[x]);
    //     console.log(objectsArray[index].subtask[x]);
    // }
}


// This function needs arguments so that it add it as innnertext
const createSubtask = (subtask)=>{
    const ul = document.querySelector(".subtasks-ul");

    const li = document.createElement("li");
    li.classList.add("task");

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("item-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const label = document.createElement("label");
    label.classList.add("label");
    label.innerText = subtask;
    
    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(label);

    const rightDiv = document.createElement("div");
    // Svgs here!!

    li.appendChild(leftDiv);
    li.appendChild(rightDiv);

    ul.appendChild(li);

}

export {populateTaskSection , createSubtask , populateSubtask}