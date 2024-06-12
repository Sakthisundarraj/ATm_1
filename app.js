// login page

let usertag = "sakthi"
let pin = "1234"
let logintime
let list = document.getElementById("history")
let li

function check() {

    const user = "sakthi"
    const pass = "1234"
    const getuser = document.getElementById("username").value
    const getpass = document.getElementById("password").value

    if (user === getuser && pass === getpass) {
        alert("Login Sucessfully at" + Date())
        logintime = ("Login Sucessfully at " + Date())
        window.open('main-page.html')
        li = document.createElement("li")
        li.textContent = logintime
        list.appendChild(li)
    }

    else if (user === getuser && pass != getpass) {

        alert("Incorrect Password" + "  " + Date())
        logintime = ("Incorrect Password " + Date())
        li = document.createElement("li")
        li.textContent = logintime
        list.appendChild(li)
    }

    else if (user != getuser && pass === getpass) {

        alert("Incorrect Username" + "  " + Date())
        logintime = ("Incorrect Username" + "  " + Date())
        li = document.createElement("li")
        li.textContent = logintime
        list.appendChild(li)
    }

    else if (user != getuser && pass != getpass) {

        alert("username and Password are incorrect" + "  " + Date())
        logintime = ("username and Password are incorrect" + "  " + Date())
        li = document.createElement("li")
        li.textContent = logintime
        list.appendChild(li)
    }

    else if (user === null || !pass) {
        alert("Enter a User name and Password to Login")
    }
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
}



// main-page.........>
document.getElementById("name-tag").textContent = ("Hi," + usertag)
// function startTime(){
let timings = new Date()
let ye = timings.getFullYear()
let mo = timings.getMonth() + 1
let da = timings.getDate()
// let hr = timings.getHours()
// let mi = timings.getMinutes()
// let se = timings.getSeconds()

let maintime = da + "/" + mo + "/" + ye
document.getElementById("time-tag").textContent = maintime

function startTime() {
    let newtimings = new Date()
    let newhr = newtimings.getHours()
    let newmin = newtimings.getMinutes()
    newsec = newtimings.getSeconds()
    colorsec = document.getElementById("newsec")
    // a(newhr + ":" + newmin + ":" + newsec)
    if (newhr < 10) {
        newhr = "0" + newhr
    }
    if (newmin < 10) {
        newmin = "0" + newmin
    }
    if (newsec < 10) {
        newsec = "0" + newsec
    }
    let newmaintime = newhr + ":" + newmin + ":" + newsec
    setInterval(startTime, 1000)
    document.getElementById("newtime-tag").textContent = newmaintime
}

startTime()




// Deposit............>

//callback function 

function time(a) {
    let time = new Date()
    let hr = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let fulltime = hr + ":" + min + ":" + sec
    a(fulltime)
}

let amount = 50000
let deamount
let wiamount
let ar = []
let dephis
let withis
let trahis
function deposit() {

    deamount = parseInt(prompt("Enter a Amount to Deposit"))

    if (!deamount) {
        alert("Kindly Enter a Amount")
    }
    else {
        amount += deamount
        alert(" Amount " + "  " + deamount + "  " + "Sucessfully Deposited")

        function test(x) {
            dephis = (" Amount " + "  " + deamount + "  " + "Sucessfully Deposited")
            ar.push("[" + dephis + ":" + x + "]")
            document.getElementById("his").textContent = ar
        }
        time(test) //call back function

    }
}

//withdraw............>

function balance() {

    alert("Available Balance" + "  " + amount)

}

function withdrawl() {

    wiamount = parseInt(prompt("Enter a Amount to Withdrawl"))

    if (wiamount > amount) {
        alert("insufficient Balance")
    }
    else if (!wiamount) {
        alert("Enter an Amount")
    }
    else {
        amount -= wiamount
        alert("Amount" + "  " + wiamount + "  " + "Sucessfully Withdrawn")

        function test2(z) {
            withis = ("Amount" + "  " + wiamount + "  " + "Sucessfully Withdrawn")
            ar.push("[" + withis + "  " + z + "]")
            document.getElementById("his").textContent = ar

        }
        time(test2) //call back function

    }

}

function exit() {
    window.close('main-page.html')
}

let oldpin
let newpin

function changepin() {

    oldpin = parseInt(prompt("Enter a Old pin to Verify"))

    if (oldpin == pin) {
        alert("Verify Completed")
        newpin = parseInt(prompt("Create a New Pin"))
        pin = newpin
    }
    else {
        alert("Enter a Correct old Pin verify")
    }
}

let tr
let ac

function transfer() {

    ac = parseInt(prompt("Enter a account number"))

    if (!ac) {
        alert("Please Enter account number")

    }
    else {

        tr = parseInt(prompt("Enter a Amount"))

        if (!tr) {
            alert("Please Enter a Amount")
        }
        else {
            amount -= tr
            alert("Entered Amount" + " " + tr + " " + "Successfully Transfered")

            function test3(z) {
                trahis = ("Entered Amount" + " " + tr + " " + "Successfully Transfered")
                ar.push("[" + trahis + " " + z + "]")
                document.getElementById("his").textContent = ar
            }

            time(test3) //call back function
        }
    }
}




// forgot password.......>

var forgotinput
const a1 = "abcstreet"
const a2 = "abcteacher"

function forgot() {

    forgotinput = document.getElementById("forgot-input").value
    console.log(forgotinput)

    if (forgotinput == "abcschool") {
        alert("Verify Completed")
        forgotinput = prompt("What is your street name?")

        if (forgotinput == "abcstreet") {
            alert("Second Question Verify Completed")
            forgotinput = prompt("Your Favourite teacher name?")

            if (forgotinput == "abcteacher") {
                alert("Verify sucessfully completed")
                var newpass = prompt("Enter a New Password")

                if (!newpass) {
                    alert("Enter a password")
                }
                else {
                    alert("Password changed sucessfully")
                }
            }
            else {
                alert("Answer Incorrect")
            }
        }
        else {
            alert("Answer Incorrect")
        }
    }
    else {
        alert("Enter a correct answer")
    }
}

