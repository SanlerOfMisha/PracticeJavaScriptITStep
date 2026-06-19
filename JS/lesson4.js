// let dog = {
//     age:18,
//     color:"yellow-orange",
//     fur:"middle",
//     name:"Doge"
// }
//
// //alert(`${dog.age}`)
// //alert(`${dog["age"]}`)
//
// if ("age" in dog) {
//     alert("Present")
// }

let rectangle = {
    A: {X: 0, Y: 0},
    B: {X: 0, Y: 0},
    C: {X: 0, Y: 0},
    D: {X: 0, Y: 0},
}

function UpdateList() {
    let list = document.getElementById("points").children[0].children
    list[0].innerHTML = `A: {${rectangle.A.X},${rectangle.A.Y}}`
    list[1].innerHTML = `B: {${rectangle.B.X},${rectangle.B.Y}}`
    list[2].innerHTML = `C: {${rectangle.C.X},${rectangle.C.Y}}`
    list[3].innerHTML = `D: {${rectangle.D.X},${rectangle.D.Y}}`
}

let Height = 0
let Width = 0

document.getElementById("create").addEventListener("click", ()=> {
    let Boxes = document.getElementsByClassName("box")
    let A1 = {X: 0, Y: 0}
    let D1 = {X: 0, Y: 0}
    A1.X = +Boxes[0].children[0].value
    A1.Y = +Boxes[0].children[1].value

    D1.X = +Boxes[1].children[0].value
    D1.Y = +Boxes[1].children[1].value

    //A    B
    //
    //C    D
    let B1 = {X:D1.X, Y:A1.Y}
    let C1 = {X:A1.X, Y:D1.Y}
    rectangle.A = A1
    rectangle.B = B1
    rectangle.C = C1
    rectangle.D = D1

    UpdateList()

    Width = rectangle.B.X - rectangle.A.X
    Height = rectangle.C.Y - rectangle.A.Y
})

document.getElementById("width").addEventListener("click", ()=>{
    document.getElementById("result").innerHTML = `Width: ${Width} units`
})

document.getElementById("height").addEventListener("click", ()=>{
    document.getElementById("result").innerHTML = `Height: ${Height} units`
})

document.getElementById("square").addEventListener("click", ()=>{
    document.getElementById("result").innerHTML = `Square: ${Height*Width} units^2`
})

document.getElementById("Perimeter").addEventListener("click", ()=>{
    document.getElementById("result").innerHTML = `Perimeter: ${(Height*2)+(2*Width)} units`
})



document.getElementById("ChangeWidth").addEventListener("click", ()=> {
    let newWidth = +document.getElementById("InputWidth").value
    rectangle.B.X = rectangle.A.X + newWidth
    rectangle.D.X = rectangle.A.X + newWidth
    UpdateList()
})
document.getElementById("ChangeHeight").addEventListener("click", ()=> {
    let newHeight = +document.getElementById("InputHeight").value
    rectangle.C.Y = rectangle.A.Y + newHeight
    rectangle.D.Y = rectangle.A.Y + newHeight
    UpdateList()
})

document.getElementById("ChangeBoth").addEventListener("click", ()=> {
    let newHeight = +document.getElementById("InputHeight").value
    rectangle.C.Y = rectangle.A.Y + newHeight
    rectangle.D.Y = rectangle.A.Y + newHeight
    let newWidth = +document.getElementById("InputWidth").value
    rectangle.B.X = rectangle.A.X + newWidth
    rectangle.D.X = rectangle.A.X + newWidth
    UpdateList()
})


document.getElementById("AddX").addEventListener("click", ()=> {
    let newX = +document.getElementById("InputX").value
    rectangle.A.X += newX
    rectangle.B.X += newX
    rectangle.C.X += newX
    rectangle.D.X += newX
    UpdateList()
})

document.getElementById("AddY").addEventListener("click", ()=> {
    let newY = +document.getElementById("InputY").value
    rectangle.A.Y += newY
    rectangle.B.Y += newY
    rectangle.C.Y += newY
    rectangle.D.Y += newY
    UpdateList()
})

document.getElementById("AddBoth").addEventListener("click", ()=> {
    let newX = +document.getElementById("InputX").value
    rectangle.A.X += newX
    rectangle.B.X += newX
    rectangle.C.X += newX
    rectangle.D.X += newX
    let newY = +document.getElementById("InputY").value
    rectangle.A.Y += newY
    rectangle.B.Y += newY
    rectangle.C.Y += newY
    rectangle.D.Y += newY
    UpdateList()
})


document.getElementById("CheckCoordinates").addEventListener("click", ()=> {
    let Coord =
        {X: document.getElementById("CheckX").value,
        Y: document.getElementById("CheckY").value}

    let x_min = Math.min(rectangle.A.X,rectangle.B.X,rectangle.C.X,rectangle.D.X)
    let x_max = Math.max(rectangle.A.X,rectangle.B.X,rectangle.C.X,rectangle.D.X)

    let y_min = Math.min(rectangle.A.Y,rectangle.B.Y,rectangle.C.Y,rectangle.D.Y)
    let y_max = Math.max(rectangle.A.Y,rectangle.B.Y,rectangle.C.Y,rectangle.D.Y)

    if ((x_min <= Coord.X && Coord.X <= x_max) && (y_min <= Coord.Y && Coord.Y <= y_max)) {
        document.getElementById("ResultCheck").innerHTML = "Result: coordinate is inside rectangle"
    } else {
        document.getElementById("ResultCheck").innerHTML = "Result: coordinate is not inside rectangle"
    }
})

let arr = new Array()

for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 10) + 1
}

function ShowResultArray(array) {
    document.getElementById("ArrayResult").innerHTML = `Result: ${array.join(' ')}`
}

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("Array").innerHTML = `Array: ${arr.join(' ')}`
})

document.getElementById("Parni").addEventListener("click", ()=> {
    newArr = new Array()
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i]&1)) {
            newArr.push(arr[i])
        }
    }
    ShowResultArray(newArr)
})

document.getElementById("Suma").addEventListener("click", ()=> {
    let suma = 0
    for (let i = 0; i < arr.length; i++) {
        suma+=arr[i]
    }
    document.getElementById("ArrayResult").innerHTML = `Result: ${suma}`
})


document.getElementById("Maximum").addEventListener("click", ()=> {
    let maxi = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i]
        }
    }
    document.getElementById("ArrayResult").innerHTML = `Result: ${maxi}`
})

document.getElementById("AddAt").addEventListener("click", ()=> {
    let element = document.getElementById("element").value
    let index = document.getElementById("index").value

    arr.splice(index, 0, element)
    document.getElementById("Array").innerHTML = `Array: ${arr.join(' ')}`
})

document.getElementById("RemoveAt").addEventListener("click", ()=> {
    let index = document.getElementById("index").value

    arr.splice(index,1)
    document.getElementById("Array").innerHTML = `Array: ${arr.join(' ')}`
})


