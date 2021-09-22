const addProject = document.querySelector(".add-project");
const overlay = document.querySelector(".overlay");
const closeForm = document.querySelector(".close-form");

// DISPLAYS FORM
addProject.addEventListener("click",(e)=>{
    overlay.style.display = "flex";
})

// CLOSES FORM 
closeForm.addEventListener("click",(e)=>{
    console.log(closeForm);
    overlay.style.display = "none";
})



export {addProject};