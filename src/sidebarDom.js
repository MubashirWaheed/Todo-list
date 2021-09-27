import { objectsArray } from "./addproject";
import { populateSubtask, populateTaskSection } from "./tasksectionDom";

const ul = document.getElementById("sidebar-items");
const today = document.querySelector(".permenant-item-1");
const month = document.querySelector(".permenant-item-2");

today.addEventListener("click", ()=>{
    console.log(today);
    populateTaskSection(0);
})

month.addEventListener("click", ()=>{
    populateTaskSection(1);
})


function addNamesTosidebar(element){
    const li = document.createElement("li");
    li.classList.add("sidebar-item");
    
    const span = document.createElement("span");
    span.classList.add("circle");

    const span2  = document.createElement("span");
    span2.innerText = element;
    
    li.appendChild(span);
    li.appendChild(span2);
    ul.appendChild(li);
}

document.querySelector("#sidebar-items").addEventListener("click",(event)=>{
    if(event.target.tagName.toLowerCase() == "span"){
        let projectClicked = event.target.innerText;
        let index = searchIndexOfProject(projectClicked);
        populateTaskSection(index);
        populateSubtask(index)
    }
})

// This function can be called anywhere to find the index of object in array
// Takes name of project as argument to find the it;s index
function searchIndexOfProject(searchItem){
    for(let i = 0; i < objectsArray.length; i++){
        if(objectsArray[i].projectName == searchItem) return i;
    }
}

export { addNamesTosidebar, searchIndexOfProject}