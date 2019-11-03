var loggedInUser = undefined

var username = "Yanica"
var password = "Svensson"

printAuthentication()

function validateForm() {
    var usernameInput = document.getElementById("username").value
    var passwordInput = document.getElementById("password").value

    if (usernameInput == username && passwordInput == password) {
        loggedInUser = usernameInput
        printList()
        logOut()
        printAuthentication()
    } else {
        var main = document.getElementById("main")
        var link = document.createElement("a")
        main.innerText = ("Har du glömt ditt lösenord?")
        link.innerText = ("Tryck på länken")
        link.className = ("a")
        link.href = ""
        main.appendChild(link)
    }
}
    logOut()

function logOut() {
    document.getElementsByClassName("button")
}

function printAuthentication() {
    var aContainer = document.getElementById("authentication")
    if (loggedInUser) {
        var logOutButton = document.createElement("button")
        logOutButton.classList = ("button")
        logOutButton.innerText = "Logga Ut"
        logOutButton.href = "/index.html"
        aContainer.appendChild(logOutButton)
        logOutButton.onclick = function () {
            
            logOut()
        }
    } else {
        var logIn = document.createElement("p")
        logIn.classList = "logIn"
        logIn.innerText = "Login:"
        aContainer.appendChild(logIn)

        var inputUser = document.getElementById("username")
        aContainer.appendChild(inputUser)

        var inputPass = document.getElementById("password")
        aContainer.appendChild(inputPass)

        var logInButton = document.createElement("button")
        logInButton.classList = ("button")
        logInButton.innerText = "Submit"
        aContainer.appendChild(logInButton)

        logInButton.onclick = function () {
            validateForm()
        }
    }
}

/* var logOut = document.createElement("button")
var topNav = document.getElementsByClassName("topNav")
logOut.classList = ("button") */

/* logOut.onclick = function () {
    document.getElementsByTagName("div")[0].innerHTML = ""
    topNav.appendChild(logOut)
    console.log(logOut)
} */


function printList() {
    var main = document.getElementById("main")

    main.innerText = username + " " + password

    var container = document.createElement("div")
    container.classList = "container"

    var title = document.createElement("p")
    title.innerText = ("ToDo")

    var toDoList = document.createElement("ol")
    toDoList.classList = ("ol")

    var stuffToDo = ["Plugga","Träna","Familj","Jobba","Fritid"]

    for (var i = 0; i < stuffToDo.length; i++) {
        var selectedToDo = stuffToDo[i]

        listItem = document.createElement("li")
        listItem.classList = ("li")
        listItem.innerText = selectedToDo

        toDoList.appendChild(listItem)
    }

    container.appendChild(title)
    container.appendChild(toDoList)
    main.appendChild(container)
}




