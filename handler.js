




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
    loggedInUser = undefined
    printList()
    printAuthentication()
}

function printAuthentication() {
    var aContainer = document.getElementById("authentication")
    aContainer.innerHTML = ""
    if (loggedInUser) {
        var logOutButton = document.createElement("button")
        logOutButton.classList = ("logOutButton")
        logOutButton.innerText = "Logga Ut"
        aContainer.appendChild(logOutButton)
        logOutButton.onclick = function () {
            logOut()
        }
    } else {
        var logIn = document.createElement("p")
        logIn.classList = "logIn"
        logIn.innerText = "Login:"
        aContainer.appendChild(logIn)

        var inputUser = document.createElement("input")
        inputUser.id = "username"
        inputUser.type = "text"
        inputUser.placeholder = "username"
        aContainer.appendChild(inputUser)

        var inputPass = document.createElement("input")
        inputPass.id = "password"
        inputPass.type = "password"
        inputPass.placeholder = "password"
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

function printList() {
    var main = document.getElementById("main")
    main.innerHTML = ""
    if (loggedInUser) {
        main.innerText = username + " " + password

        var container = document.createElement("div")
        container.classList = "container"

        var title = document.createElement("p")
        title.innerText = ("ToDo")

        var toDoList = document.createElement("ol")
        toDoList.classList = ("ol")

        var stuffToDo = ["Plugga", "Träna", "Familj", "Jobba", "Fritid"]
        var json_str = JSON.stringify(stuffToDo);
        localStorage.toDoList = json_str;

        for (var i = 0; i < stuffToDo.length; i++) {
            var selectedToDo = stuffToDo[i]

            listItem = document.createElement("li")
            listItem.classList = ("li")
            listItem.innerText = selectedToDo

            toDoList.appendChild(listItem)
            selectedToDo = JSON.parse(localStorage.toDoList);	
        }

        container.appendChild(title)
        container.appendChild(toDoList)
        main.appendChild(container)

    } else {
        var welcome = document.getElementById("main")
        welcome.innerText = "Hej och Välkommen!"
    }

}




