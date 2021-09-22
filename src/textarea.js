const textArea = document.getElementById("description");
textArea.addEventListener("keyup", e=>{
    let scheight = e.target.scrollHeight;
    if(scheight <= 150){
        textArea.style.height = `${scheight}px`;
    }else{
        // textArea.style.resize = "none";
        return
    }
    
})
export {textArea};