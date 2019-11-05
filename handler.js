

var username = "Yanica"
var password = "Svensson"

printAuthentication()
printList()
printNewTodoItem()

function validateForm() {
    var usernameInput = document.getElementById("username").value
    var passwordInput = document.getElementById("password").value

    if (usernameInput == username && passwordInput == password) {
        localStorage.setItem("loggedInUser", usernameInput)
        printList()
        printAuthentication()
        printNewTodoItem()
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

function logOut() {
    localStorage.removeItem("loggedInUser")
    printList()
    printAuthentication()
    printNewTodoItem()
}

function printAuthentication() {
    var aContainer = document.getElementById("authentication")
    aContainer.innerHTML = ""

    if (localStorage.getItem("loggedInUser")) {
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
    var todoListContainer = document.getElementById("todoList")
    todoListContainer.innerHTML = ""
    if (localStorage.getItem("loggedInUser")) {
        todoListContainer.innerText = username + " " + password

        var container = document.createElement("div")
        container.classList = "container"

        var title = document.createElement("p")
        title.innerText = ("ToDo")

        var toDoList = document.createElement("ol")
        toDoList.classList = ("ol")

        var stuffToDo = JSON.parse(localStorage.getItem("todoList"))

        if (!stuffToDo) {
            stuffToDo = []
        }
        for (var i = 0; i < stuffToDo.length; i++) {
            var selectedToDo = stuffToDo[i]

            listItem = document.createElement("li")
            listItem.classList = ("li")
            listItem.innerText = selectedToDo

            toDoList.appendChild(listItem)

            var removeButton = document.createElement("button")
            removeButton.classList = "button"
            removeButton.innerText = "Ta Bort"
            removeButton.data = i

            listItem.appendChild(removeButton)

            removeButton.onclick = function () {
                stuffToDo.splice(this.data, 1)
                localStorage.setItem("todoList", JSON.stringify(stuffToDo))
                printList()

                /* for (var i = 0; i < stuffToDo.length; i++) {
                    if (this.data == stuffToDo[i]) {
                        stuffToDo.splice(i, 1)
                        console.log(stuffToDo)
                        localStorage.setItem("todoList", JSON.stringify(stuffToDo))
                        printList()
                        return
                    }
                } */
            }

            container.appendChild(title)
            container.appendChild(toDoList)
            todoListContainer.appendChild(container)
        }

    } else {
        var welcome = document.getElementById("todoList")
        welcome.innerText = "Hej och Välkommen!"
    }

}

function printNewTodoItem() {
    var addNewContainer = document.getElementById("addNewContainer")
    addNewContainer.innerHTML = ""

    if (localStorage.getItem("loggedInUser")) {
        var newTODOForm = document.createElement("input")
        newTODOForm.id = "addItem"
        newTODOForm.type = "text"
        newTODOForm.placeholder = "Add item"
        addNewContainer.appendChild(newTODOForm)

        var inputButton = document.createElement("button")
        inputButton.classList = ("button")
        inputButton.innerText = "Submit"
        addNewContainer.appendChild(inputButton)


        inputButton.onclick = function () {
            newTodoList()
        }

    } else {
        var notLoggedInFeedback = document.createElement("h5")
        addNewContainer.innerText = "Du måste logga in först..."
        addNewContainer.appendChild(notLoggedInFeedback)
    }
}

function newTodoList() {
    var newTODOFormInput = document.getElementById("addItem").value
    var listTodo = JSON.parse(localStorage.getItem("todoList"))

    if (!listTodo) {
        listTodo = []
    }

    listTodo.push(newTODOFormInput)
    localStorage.setItem("todoList", JSON.stringify(listTodo))

    printList()
    console.log(newTODOFormInput)
    printNewTodoItem()
}