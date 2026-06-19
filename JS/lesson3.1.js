let TimeOut = 500
let AliveColor = "green"
let DeadColor = "#FFFFFF"

let myInterval

let flag = false

function paint(e) {
    if (e.target.style.backgroundColor !== AliveColor) {
        e.target.style.backgroundColor = AliveColor
    } else {
        e.target.style.backgroundColor = DeadColor
    }
}

window.addEventListener("DOMContentLoaded", ()=> {

    for(let i = 0; i < 20; i++) {
        let tr = document.createElement("tr")
        for (let j = 0; j < 20; j++) {
            let td = document.createElement("td")
            td.addEventListener('click', paint)
            tr.appendChild(td)
        }
        document.getElementById("canvas").appendChild(tr)
    }
})

function StartLife() {
    console.log("tick")
    if (!flag) {
        clearInterval(myInterval)
        console.log("Simulation stopped")
    }


    let trElements = document.getElementById("canvas").children
    for (let i = 0; i < trElements.length; i++) {
        //tr -> column -> i
        //td -> row -> j

        // • якщо жива і має менше 2 сусідів → помирає
        // • якщо жива і має 2 або 3 сусіди → живе
        // • якщо жива і має більше 3 сусідів → помирає
        // • якщо мертва і має рівно 3 сусіди → оживає
        let tdElements = trElements[i].children
        for (let j = 0; j < tdElements.length; j++) {
            if (i > 0 && j > 0 && i < trElements.length - 2 && j < tdElements.length - 2) {
                let target = tdElements[j]
                let aliveN = 0
                for(let r = j - 1; r <= j + 1; r++) {
                    for(let c = i - 1; c <= i + 1; c++) {

                        if(r === j && c === i) {
                            // '  '  '
                            // ' |.| '
                            // '  '  '
                            continue;
                        }

                        if(trElements[c].children[r].style.backgroundColor === AliveColor) {
                            aliveN++;
                        }
                    }
                }

                if (target.style.backgroundColor === AliveColor) {
                    if (aliveN < 2 || aliveN > 3) {
                        target.style.backgroundColor = DeadColor
                    }
                } else {
                    if (aliveN === 3) {
                        target.style.backgroundColor = AliveColor
                    }
                }
            }

        }
    }
}

document.getElementById("start").addEventListener("click", ()=> {
    flag = true
    console.log("Simulation started")
    myInterval = setInterval(StartLife, TimeOut)
})


document.getElementById("stop").addEventListener("click", ()=>{
    flag = false
})

document.getElementById("clear").addEventListener("click", ()=> {
    let trElements = document.getElementById("canvas").children
    for(let i = 0; i < trElements.length; i++) {
        let tdElements = trElements[i].children
        for(let j = 0; j < tdElements.length; j++) {
            tdElements[j].style.backgroundColor = DeadColor
        }
    }
})