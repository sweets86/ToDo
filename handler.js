

var username = "Yanica"
var password = "Svensson"

function validateForm() {
    var usernameInput = document.getElementById("username").value
    var passwordInput = document.getElementById("password").value
    var main = document.getElementById("main")
    
    if (usernameInput == username && passwordInput == password) {
        main.innerText = username + password
        
    } else {
        main.innerText = ("Har du glömt ditt lösenord?")
    }
}