let isValid = false

document.getElementById("email").addEventListener("change", (e) => {
    let email = e.target.value
    email = email.trim()

    const error_email = document.getElementById("emailError")
    error_email.style.color = "red"

    if (!email.includes("@") || !email.includes(".")) {
        error_email.textContent = "Введіть коректний шлях електронної пошти"
        isValid = false;
    } else if (email.length <= 1) {
        error_email.textContent = "Поле пусте, веддіть електронну пошту"
        isValid = false
    } else {
        isValid = isValid ? true : false
        error_email.textContent = ""
    }
})

document.getElementById("password").addEventListener("change", (e) => {
    let passwordText = e.target.value
    const password_error = document.getElementById("passwordError")

    const specialSymbols = "*/-+.,<>?!#@$%^&"
    let isPasswordValid = true

    for (let i = 0; i < specialSymbols.length; i++) {
        if (passwordText.includes(specialSymbols[i])) {
            isPasswordValid = true;
            break;
        } else {
            isPasswordValid = false;
        }
    }

    if (!isPasswordValid) {
        password_error.textContent = "Нема спец.символа в паролі"
    } else {
        password_error.textContent = ""
    }

    for (let i = 0; i < passwordText.length; i++) {
        if (passwordText[i].toUpperCase() === passwordText[i]) {
            isPasswordValid = true;
            break
        } else {
            isPasswordValid = false;
        }
    }

    if (!isPasswordValid) {
        password_error.textContent = "Нема літер у верхньому реєстрі"
    } else {
        password_error.textContent = ""
    }

    isValid = isPasswordValid && (isValid === true) ? true : false
})

document.getElementById("repeatPassword").addEventListener("change", (e)=>{
    let repText = e.target.value
    let passwordText = document.getElementById("password").value
    if (repText === passwordText){
        document.getElementById("passwordReapeatError").textContent = ""
        isValid = (isValid === true) ? true : false
    }else{
        document.getElementById("passwordReapeatError").textContent = "Паролі не збігаються"
        isValid = false
    }
})

document.getElementById("register").addEventListener("click", ()=>{
    document.getElementById("HasError").textContent = isValid ? "" : "Є помилки, виправіть перед відправкою"
})