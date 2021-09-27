const textArea = document.getElementById("description");

// Eventlistner to dynamically increase the size of description area
textArea.addEventListener("keyup", e=>{
    let scheight = e.target.scrollHeight;
    if(scheight <= 150){
        textArea.style.height = `${scheight}px`;
    }
    
})
export {textArea};