// // alert(prompt("Enter data here"))
// //1
// let a = prompt("Enter number here") ** 2
// alert(a)
// //2
// let num1 = +prompt("Enter first number here")
// let num2 = +prompt("Enter second number here")
// alert("Середнє арифметичне: " + ((num1 + num2) / 2))
// //3
// let side = prompt("Enter lenght side of your square")
// alert(side*side)
// //4
// alert("Miles: " + (+prompt("Enter KMs to convert into miles:") * 0.621371))
// //5
// a = +prompt("Enter a number")
// let b = +prompt("Enter b number")
//
// alert("a + b = " + (a+b))
// alert("a - b = " + (a-b))
// alert("a * b = " + (a*b))
// alert("a / b = " + (a/b))
// //6
// a = +prompt("Enter a number")
// b = +prompt("Enter b number")
// alert("a*x+b=0; x = " + (-b / a))
// //7
// a = +prompt("Enter hours")
// b = +prompt("Enter minutes")
// c = 1440 - (a * 60 + b)
// alert("Left before next day hours: " + Math.trunc(c/60) + " and minutes: " + c%60)
// //8
//
// // 123 -> 2
// // 123 / 10 -> 12.3 -> 12 % 10 -> 2
// a = +prompt("Enter number here")
// alert(Math.trunc(a / 10) % 10)
//
// //9
// //12345 -> 51234
// //12345 % 10 -> 5 * 10000
// //12345 / 10 -> 1234
// // 5000 + 1234
// a = +prompt("Enter number here")
// b = (a % 10) * 10000
// alert(b + (Math.trunc(a / 10)))
//
// //10
// //$250+10% from total sale
// a = +prompt("Enter total sale here: ")
// alert("Your paycheck is $" + (250 + (a * 0.1)))

// //1
// let a = +prompt("Enter number here: ")
//
// if (a > 0) {
//     alert(`${a} is positive`)
// } else if (a < 0) {
//     alert(`${a} is negative`)
// } else {
//     alert(`${a} is zero`)
// }
//
// //2
// a = +prompt("Enter your age: ")
// if ((a >= 0) && (a <= 120)) {
//     alert("Everything is okay")
// } else {
//     alert("Your age is not between 0-120")
// }
//
// //3
// a = +prompt("Enter your number: ")
// if (a < 0) {
//     alert(`|${a}| = ` + a*-1)
// } else {
//     alert(`|${a}| = ` + a)
// }
//
// //4
// a = +prompt("Enter hours: ")
// let b = +prompt("Enter minutes: ")
// let c = +prompt("Enter seconds: ")
//
// if ((a < 0) || (a > 24)) {
//     alert("Your hours are not between 0-24")
// } else {
//     alert("Your hours are okay")
// }
//
// if ((b < 0) || (b > 60)) {
//     alert("Your minutes are not between 0-60")
// } else {
//     alert("Your minutes are okay")
// }
//
// if ((b < 0) || (b > 60)) {
//     alert("Your seconds are not between 0-60")
// } else {
//     alert("Your seconds are okay")
// }
//
// //5
//
// let x = +prompt("Enter x")
// let y = +prompt("Enter y")
// // where x and y is not 0
// if ((x > 0) && (y > 0)) {
//     alert("Чверть: I")
// } else if ((x < 0) && (y > 0)) {
//     alert("Чверть: II")
// } else if ((x < 0) && (y < 0)) {
//     alert("Чверть: III")
// } else if ((x > 0) && (y < 0)) {
//     alert("Чверть: IV")
// }
// // where x and y can be 0
//
// if ((x == 0) && (y > 0)) {
//     alert("Чверть: between I and II")
// } else if ((x == 0) && (y < 0)) {
//     alert("Чверть: between III and IV")
// } else if ((x > 0) && (y == 0)) {
//     alert("Чверть: between I and IV")
// } else if ((x < 0) && (y == 0)) {
//     alert("Чверть: between II and III")
// } else if ((x == 0) && (y == 0)) {
//     alert("Coordinate is in center (x is 0 and y is 0)")
// }
//
// //6
// a = +prompt("Enter number of month: ")
// switch (a) {
//     case 1:
//         alert("Січень")
//         break;
//     case 2:
//         alert("Лютий")
//         break;
//     case 3:
//         alert("Березень")
//         break;
//     case 4:
//         alert("Квітень")
//         break;
//     case 5:
//         alert("Травень")
//         break;
//     case 6:
//         alert("Червень")
//         break;
//     case 7:
//         alert("Липень")
//         break;
//     case 8:
//         alert("Серпень")
//         break;
//     case 9:
//         alert("Вересень")
//         break;
//     case 10:
//         alert("Жовтень")
//         break;
//     case 11:
//         alert("Листопад")
//         break;
//     case 12:
//         alert("Грудень")
//         break;
//     default:
//         alert("unluck")
//         break;
// }
//
// //7
// a = +prompt("Enter first number: ")
// b = +prompt("Enter second number: ")
// c = prompt("Enter type operation (enter only char: + ; - ; * ; /)")
//
// switch (c) {
//     case '+':
//         alert("result: " + (a+b))
//         break;
//     case '-':
//         alert("result: " + (a-b))
//         break;
//     case '*':
//         alert("result: " + (a*b))
//         break;
//     case '/':
//         alert("result: " + (a/b))
//         break;
//     default:
//         alert("unluck")
//         break;
// }
//
// //8
// a = +prompt("enter first number: ")
// b = +prompt("Enter second number: ")
// (a > b) ? alert(`${a} is bigger`) : alert(`${b} is bigger`)
//
// //9
// a = +prompt("Enter number: ")
// (a % 5 == 0) ? alert(`${a} кратний до 5`) : alert(`${a} не кратний до 5`)
//
// //10
// a = prompt("Enter message: ")
// (a.toLowerCase() == "земля") ? alert("Привіт, землянине!") : alert("Привіт, інопланетянине!")

// FOR
// 1
let a = +prompt("Enter number: ")

for(let i = 0; i <= 100; i++) {
    if (i % a === 0) {
        alert(`${i} % ${a} = 0`)
    }
}

// 2
a = +prompt("Enter min:")
let b = +prompt("Enter max:")
if (a > b) {
    temp = a
    a = b
    b = temp
}

let c = 0
for(let i = a; i <= b; i++) {
    if (c === 4) {
        c = 0
        alert(`${i}`)
    } else {
        c++
    }
}

//3
a = +prompt("Enter number: ")
flag = true
if (a < 2) {
    alert("False")
} else {
    for (let i = 2; i*i<=a; i++) {
        if (a % i === 0) {
            flag = false
        }
    }
    if (flag) {
        alert("True, число просте")
    } else {
        alert("False, число не просте")
    }
}
