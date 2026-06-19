let isValidEmail = false
let isValidPassword = false
let isValidRepeatPassword = false

document.getElementById("email").addEventListener("change", (e) => {
    let email = e.target.value
    email = email.trim()

    const error_email = document.getElementById("emailError")
    error_email.style.color = "red"

    if (!email.includes("@") || !email.includes(".")) {
        error_email.textContent = "Введіть коректний шлях електронної пошти"
        isValidEmail = false;
    } else if (email.length <= 1) {
        error_email.textContent = "Поле пусте, веддіть електронну пошту"
        isValidEmail = false
    } else {
        // one more logic
        // тільки такі символи: літери, крапка, дефіс, нижнє підкреслення;
        // обов'язково мають бути символ @ і домен після @;
        // до символу @ мають стояти мінімум 3 інших символи. asdsa@gmail.com -> asdas ; @ ; gmail.com
        const parts = email.split(/(@)/) // to make 3 parts name ; @ ; domain
        if (parts.length !== 3) {
            error_email.textContent = "Поле пусте, веддіть електронну пошту (немає @, як сеператор)"
            isValidEmail = false;
            return;
        }
        if (parts[0].length < 3) {
            error_email.textContent = "Ім'я електронної пошти має містити мінімум 3 символи"
            isValidEmail = false;
            return;
        }
        if (parts[1] !== "@") {
            error_email.textContent = "Введіть коректний шлях електронної пошти (no @ in correct place)"
            isValidEmail = false;
            return;
        }
        if (parts[2].split(/(\.)/).filter(x => x !== "").length !== 3) { // gmail.com -> gmail ; . ; com
            error_email.textContent = "Введіть коректний шлях електронної пошти (wrong domain name smh)"
            isValidEmail = false;
            return;
        }
        isValidEmail = true
        error_email.textContent = ""
    }
})

document.getElementById("password").addEventListener("change", (e) => {
    let passwordText = e.target.value
    const password_error = document.getElementById("passwordError")

    const specialSymbols = "*/-+.,<>?!#@$%^&"
    let isPasswordValid = true
    // обов'язкове поле;
    // мінімум 6 символів;
    // обов'язково мають міститися: 1 літера нижнього регістра, 1 літера верхнього регістра та 1 цифра.

    // check password length is minimum 6 symbols
    if (passwordText.length < 6) {
        password_error.textContent = "Пароль має містити мінімум 6 символів"
        isValidPassword = false
        return;
    } else {
        password_error.textContent = ""
    }

    // check for special symbols
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
        isValidPassword = isPasswordValid
        return;
    } else {
        password_error.textContent = ""
    }

    // check for upper case symbol
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
        isValidPassword = isPasswordValid
        return;
    } else {
        password_error.textContent = ""
    }

    //check for lower case symbol
    for (let i = 0; i < passwordText.length; i++) {
        if (passwordText[i].toLowerCase() === passwordText[i]) {
            isPasswordValid = true;
            break
        } else {
            isPasswordValid = false;
        }
    }

    if (!isPasswordValid) {
        password_error.textContent = "Нема літер у ніжньому реєстрі"
        isValidPassword = isPasswordValid
        return;
    } else {
        password_error.textContent = ""
    }

    //check for digit
    for (let i = 0; i < passwordText.length; i++) {
        if (passwordText[i] >= '0' && passwordText[i] <= '9') {
            isPasswordValid = true;
            break
        } else {
            isPasswordValid = false;
        }
    }

    if (!isPasswordValid) {
        password_error.textContent = "Нема ціфер у паролі"
        isValidPassword = isPasswordValid
        return;
    } else {
        password_error.textContent = ""
    }

    isValidPassword = isPasswordValid
})

document.getElementById("repeatPassword").addEventListener("change", (e)=>{
    // good
    let repText = e.target.value
    let passwordText = document.getElementById("password").value
    if (repText === passwordText){
        document.getElementById("passwordReapeatError").textContent = ""
        isValidRepeatPassword = true
    }else{
        document.getElementById("passwordReapeatError").textContent = "Паролі не збігаються"
        isValidRepeatPassword = false
    }
})

document.getElementById("register").addEventListener("click", ()=>{
    if (isValidEmail && isValidPassword && isValidRepeatPassword) {
        setCookie("email", document.getElementById("email").value, 1)
        document.getElementById("SignUp").style.display = "none"
        document.getElementById("AfterSignUp").style.display = "flex"
        document.getElementById("HasError").textContent = "";
        document.getElementById("HelloEmail").textContent = `Hello, ${getCookie("email")}!, exit`;
    } else {
        document.getElementById("HasError").textContent = "Є помилки, виправіть перед відправкою";
    }
})

function setCookieEmail(name, value, hours) {
    const date = new Date()
    date.setTime(date.getTime() + hours * 60 * 60 * 1000)
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + ";path=/"
}

function getCookie(name) {
    const cookies = document.cookie.split(";")
    for (let i = 0; i < cookies.length; i++) {
        let parts = cookies[i].split("=");
        // to catch problem where cookies are empty and causes index out of range in parts[1].trim()
        if (parts.length < 2) {
            continue
        }
        let cookieName = parts[0].trim()
        let cookieValue = parts[1].trim()
        if (cookieName === name) {
            return decodeURIComponent(cookieValue)
        }
    }
}

function deleteCookie(name){
    document.cookie = name +"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/"
}


document.getElementById("register").addEventListener("click", ()=>{
    let email = document.getElementById("email").value
    setCookieEmail("email", email, 1)
})

window.addEventListener("DOMContentLoaded", ()=>{
    let email = getCookie("email")
    //document.getElementById("email").value = getCookie("email")
    if (typeof email === "undefined") {
        document.getElementById("email").value = ""
    } else {
        document.getElementById("SignUp").style.display = "none"
        document.getElementById("AfterSignUp").style.display = "flex"
        document.getElementById("HelloEmail").textContent = `Hello, ${email}!, exit`;

        let DetailInfo = getCookie("UserInfo")
        if (typeof DetailInfo !== "undefined") {
            DetailInfo = DetailInfo.split("+") //6 parts of info
            document.getElementById("FirstName").value = DetailInfo[0];
            document.getElementById("SecondName").value = DetailInfo[1];
            document.getElementById("YearOfBirth").value = DetailInfo[2];
            document.getElementById("Gender").value = DetailInfo[3];
            document.getElementById("PhoneNumber").value = DetailInfo[4];
            document.getElementById("Skype").value = DetailInfo[5];
        }
    }
})

let arrChecks = new Array(false,false,false,true,false,false) // Firstname;Secondname;Yearofbirth;gender(set by default);phonenumber;skype

//First name
document.getElementById("FirstName").addEventListener("change", (e)=> {
    let name = e.target.value
    name = name.trim()

    const FirstNameError = document.getElementById("FirstNameError")
    FirstNameError.style.color = "red"

    if (name.length === 0) {
        FirstNameError.textContent = "First name is empty"
        return;
    }

    if (name.length > 20) {
        FirstNameError.textContent = "First name length must be not bigger than 20"
        return;
    }

    for (let i = 0; i < name.length; i++) {
        if (name[i] >= '0' && name[i] <= '0') {
            FirstNameError.textContent = "First name must not contain digits";
            arrChecks[0] = false;
            return;
        }
    }

    FirstNameError.textContent = ""
    arrChecks[0] = true
})

// Second name
document.getElementById("SecondName").addEventListener("change", (e)=> {
    let name = e.target.value
    name = name.trim()

    const SecondNameError = document.getElementById("SecondNameError")
    SecondNameError.style.color = "red"

    if (name.length === 0) {
        SecondNameError.textContent = "Second name is empty"
        return;
    }

    if (name.length > 20) {
        SecondNameError.textContent = "Second name length must be not bigger than 20"
        return;
    }

    for (let i = 0; i < name.length; i++) {
        if (name[i] >= '0' && name[i] <= '0') {
            SecondNameError.textContent = "Second name must not contain digits";
            arrChecks[1] = false;
            return;
        }
    }

    SecondNameError.textContent = ""
    arrChecks[1] = true
})

//Year of birth

document.getElementById("YearOfBirth").addEventListener("change", (e)=> {
    let year = e.target.value
    year = year.trim()

    const YearOfBirthError = document.getElementById("YearOfBirthError")
    YearOfBirthError.style.color = "red"

    if (year.length === 0) {
        YearOfBirthError.textContent = "Year of birth is empty"
        arrChecks[2] = false;
        return;
    }

    year = +year
    if (isNaN(year)) {
        YearOfBirthError.textContent = "Year of birth must contain only digits"
        arrChecks[2] = false;
        return;
    }

    if (year <= 1900 || year > new Date().getFullYear()) {
        YearOfBirthError.textContent = `Year of birth must be between 1900 and ${new Date().getFullYear()}`
        arrChecks[2] = false;
        return;
    }

    YearOfBirthError.textContent = ""
    arrChecks[2] = true
})

//I dont think gender need some kinda check


//PhoneNumber

document.getElementById("PhoneNumber").addEventListener("change", (e)=> {
    let PhoneNumber = e.target.value
    PhoneNumber = PhoneNumber.trim()

    const PhoneNumberError = document.getElementById("PhoneNumberError")
    PhoneNumberError.style.color = "red"

    let digits = 0
    for (let i = 0; i < PhoneNumber.length; i++) {
        if (PhoneNumber[i] >= '0' && PhoneNumber[i] <= '9') {
            digits++
        }
    }

    if (digits < 10 || digits > 12) {
        PhoneNumberError.textContent = "Digits in phone number must be between 10 and 12"
        arrChecks[4] = false;
        return;
    }

    const allowedSymbols = "- ()";
    // tried to put all digits 0-9 to allowedsymbols, but it works incorrectly if digit not presented in string
    // for(let i = 0; i < allowedSymbols.length; i++) {
    //     if (!(PhoneNumber.includes(allowedSymbols[i]))) {
    //         PhoneNumberError.textContent = "Phone number has not allowed symbols inside"
    //         arrChecks[4] = false;
    //         return;
    //     }
    // }
    for(let i = 0; i < PhoneNumber.length; i++) {
        // checking if char is a digit
        if (!(PhoneNumber[i] >= '0' && PhoneNumber[i] <= '9')) {
            // if not, we need to check if it allowed symbol
            if (!(allowedSymbols.includes(PhoneNumber[i]))) {
                PhoneNumberError.textContent = "Phone number has not allowed symbols inside"
                arrChecks[4] = false;
                return;
            }
        }
    }

    PhoneNumberError.textContent = ""
    arrChecks[4] = true;
})

//Skype

document.getElementById("Skype").addEventListener("change", (e)=> {
    let Skype = e.target.value
    Skype = Skype.trim()

    const SkypeError = document.getElementById("SkypeError")
    SkypeError.style.color = "red"

    if (Skype.length === 0) {
        SkypeError.textContent = "Skype input cant be empty"
        arrChecks[5] = false;
        return;
    }

    SkypeError.textContent = ""
    arrChecks[5] = true;
})

document.getElementById("Save").addEventListener("click", ()=> {
    const SaveError = document.getElementById("SaveError")
    if (!(arrChecks.includes(false))) {
        SaveError.style.color = "green"
        const FirstName = document.getElementById("FirstName").value
        const SecondName = document.getElementById("SecondName").value
        const YearOfBirth = document.getElementById("YearOfBirth").value
        const Gender = document.getElementById("Gender").value
        const PhoneNumber = document.getElementById("PhoneNumber").value
        const Skype = document.getElementById("Skype").value

        const arrInfo = new Array(FirstName,SecondName,YearOfBirth,Gender,PhoneNumber,Skype)
        setCookieInfo("UserInfo", arrInfo.join("+"), 1)
        SaveError.textContent = "Successfully saved info!"
    } else {
        SaveError.style.color = "red"
        SaveError.textContent = "There are errors. Please fix them in inputs"
    }
})

function setCookieInfo(name, value, hours) {
    const date = new Date()
    date.setTime(date.getTime() + hours * 60 * 60 * 1000)
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + ";path=/"
}
