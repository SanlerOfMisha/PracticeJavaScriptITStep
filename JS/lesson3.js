let color = ""

document.getElementById("color").addEventListener("change", (e)=>{
    color = e.target.value
    document.getElementById("eraser").checked = false
    console.log(color)
})

function paint(e){
    e.target.style.backgroundColor = color;
}

document.getElementById("apply").addEventListener("click", ()=>{
    let width = + document.getElementById("width").value
    let height = + document.getElementById("height").value

    for(let i = 0; i < width; i++){
        let tr = document.createElement("tr")
        for(let j = 0; j < height; j++){
            let td = document.createElement("td")
            td.addEventListener('click', paint)
            tr.appendChild(td)
        }
        document.getElementById("canvas").appendChild(tr)
    }
})

window.addEventListener("DOMContentLoaded", ()=>{
    color = document.getElementById("color").value
    console.log(color)
})

document.getElementById("eraser").addEventListener("change", (e)=>{
    let isEraseMode = e.target.checked
    if (isEraseMode){
        color = "#FFFFFF"
    }else{
        color = document.getElementById("color").value
    }
})