import { Project } from ".";
import { addNamesTosidebar } from "./sidebarDom";

const addProject = document.querySelector(".add-project");
const overlay = document.querySelector(".overlay");
const closeForm = document.querySelector(".close-form");
const formBtn = document.querySelector(".form-btn");
const formInput = document.querySelector(".form-input");
const textArea = document.getElementById("form-text");

let objectsArray = [];

// Permanent items in the array 
let today = {
    projectName : "today",
    description: "test",
    subtasks: []
}
objectsArray.push(today);

let month = {
    projectName : "Month",
    description: "test",
    subtasks: []
}
objectsArray.push(month)

console.log(objectsArray);


// DISPLAYS FORM
addProject.addEventListener("click",()=>{
    overlay.style.display = "flex";
});

// CLOSES FORM 
closeForm.addEventListener("click",(e)=>{
    overlay.style.display = "none";
});

// Collection form data 
formBtn.addEventListener("click",()=>{
    let inputValue = formInput.value;
    let textAreaValue = textArea.value;
    
    let arrayItem = new Project(inputValue, textAreaValue);
    objectsArray.push(arrayItem);
    console.log(objectsArray);
    addNamesTosidebar(inputValue);
    
    formInput.value = ""; 
    textArea.value = "";
    overlay.style.display = "none";
})


export {addProject, objectsArray};