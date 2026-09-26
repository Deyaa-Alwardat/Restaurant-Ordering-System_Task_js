let form = document.getElementById("orderForm");

let result = document.getElementById("result");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let phone = document.getElementById("phone").value;

    let order = document.getElementById("order").value;


    let usernameRegex = /^\S+$/;

    let passwordRegex = /^(?=.*\d).{8,}$/;

    let phoneRegex = /^07\d{8}$/;


    if (!usernameRegex.test(username)) {
        result.textContent = "Invalid username";
        return;
    }


    if (!passwordRegex.test(password)) {
        result.textContent = "Invalid password";
        return;
    }


    if (!phoneRegex.test(phone)) {
        result.textContent = "Invalid phone number";
        return;
    }


    // Local Storage

    localStorage.setItem("order", order);
    let savedOrder = localStorage.getItem("order");


    // Session Storage

    sessionStorage.setItem("username", username);
    let savedUsername = sessionStorage.getItem("username");


    // Display result

    result.innerHTML =
        "Welcome, " + username + "<br>" +
        "Saved Order: " + savedOrder + "<br>" +
        "Saved Username: " + savedUsername;

});