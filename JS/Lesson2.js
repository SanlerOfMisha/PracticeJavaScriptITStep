//// #1
// document.getElementById("generate").addEventListener("click", ()=> {
//     let num = Math.floor(Math.random() * 100) + 1
//     document.getElementById("result").innerHTML = num
// })

// #2
// document.getElementById("box").addEventListener("mousemove", (e)=>{
// //     let target = e.target
// //     let x = e.x
// //     let y = e.y
// //     document.getElementById("coordinates").innerHTML= "X = " + x + ", " +  "Y =<b> " +y + "</b>"
// // })
// //
// // document.getElementById("box").addEventListener("click", (e) => {
// //     let whichButton
// //     switch (e.button) {
// //         case 0:
// //             whichButton = "Left click"
// //             break;
// //         case 2:
// //             whichButton = "Right click"
// //             break;
// //         default:
// //             break;
// //     }
// //     document.getElementById("button").innerHTML= whichButton
// // })

// #3
// document.getElementById("hide/show").addEventListener("click", ()=> {
//     if (document.getElementById("text").style.display !== "none") {
//         document.getElementById("text").style.display = "none"
//     } else {
//         document.getElementById("text").style.display = "flex"
//     }
// })

// #4
// document.getElementById("HTML").addEventListener("click", ()=>{
//     document.getElementById("textHTML").style.display = "flex"
//     document.getElementById("textCSS").style.display = "none"
//     document.getElementById("textJS").style.display = "none"
//
// })
// document.getElementById("CSS").addEventListener("click", ()=>{
//     document.getElementById("textHTML").style.display = "none"
//     document.getElementById("textCSS").style.display = "flex"
//     document.getElementById("textJS").style.display = "none"
//
// })
// document.getElementById("JS").addEventListener("click", ()=>{
//     document.getElementById("textHTML").style.display = "none"
//     document.getElementById("textCSS").style.display = "none"
//     document.getElementById("textJS").style.display = "flex"
//
// })
// #5

// let x = document.getElementsByClassName("remover")
//
// for( let i = 0; i < x.length; i++) {
//     x[i].addEventListener("click", (e)=> {
//         e.target.parentElement.parentElement.remove()
//     })
// }

// #6
// let currentWidth = 0
// document.getElementById("fill").addEventListener("click", ()=> {
//     currentWidth += 5
//     document.getElementById("progress-fill").style.width = currentWidth + '%'
// })

// #7

// document.getElementById("Checker").addEventListener("click", ()=> {
//     let _numbers = document.getElementsByClassName("number")
//     if (+_numbers[0].value > +_numbers[1].value) {
//         document.getElementById("result").innerHTML = ">"
//     } else if (+_numbers[0].value < +_numbers[1].value) {
//         document.getElementById("result").innerHTML = "<"
//     } else {
//         document.getElementById("result").innerHTML = "="
//     }
// })

//#8
// document.getElementById("form").addEventListener("submit", (e) => {
//     e.preventDefault()
// })
//
// document.getElementById("calculate").addEventListener("click", ()=> {
//     let number = +document.getElementById("number").value
//     let power = +document.getElementById("power").value
//
//     document.getElementById("result").value = Math.pow(number,power)
// })

// #9
// let _numbers = document.getElementsByClassName("Number")
// // я пошукав в інтернеті як це зробити, щоби не писати 4 однакові
// // for з одним різницею в char
// let operations = {
//     '+': (a,b) => a + b,
//     '-': (a,b) => a - b,
//     '/': (a,b) => a / b,
//     '*': (a,b) => a * b
// }
// document.getElementById("Calculate").addEventListener("click", () => {
//     let typeOperation = document.getElementById("TypeOperation").value
//     if (operations[typeOperation]) {
//         let result = operations[typeOperation](+_numbers[0].value,+_numbers[1].value)
//         document.getElementById("result").value = result
//     } else {
//         document.getElementById("result").value = "wrong syntax at input char operation type"
//     }
//
// })

// #10

document.getElementById("Checker").addEventListener("click", () => {
    let number = document.getElementsByClassName("number")[0].value
    if (number < 2) {
        document.getElementById("result").innerHTML="Number must be bigger than 1. Starting from 2"
        return
    }
    for(let i = 2; i*i <= number; i++) {
        if (number % i === 0 && number !== 2) {
            document.getElementById("result").innerHTML="NOT PRIME"
            return
        }
    }
    document.getElementById("result").innerHTML=`${number} Its prime number`
})