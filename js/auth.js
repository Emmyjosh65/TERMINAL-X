// SIGN UP
function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        alert("Signup Successful");
        window.location.href = "chat.html";
    })
    .catch(error => {
        alert(error.message);
    });
}

// LOGIN
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        alert("Login Successful");
        window.location.href = "chat.html";
    })
    .catch(error => {
        alert(error.message);
    });
}

// LOGOUT
function logout() {
    auth.signOut().then(() => {
        window.location.href = "login.html";
    });
}
// ADMIN LOGIN
function adminLogin() {

    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    // ADMIN DETAILS
    const adminUser = "ADMIN1";
    const adminPass = "TCHAT123";

    if(username === adminUser && password === adminPass){

        alert("Admin Login Successful");

        // Redirect admin
        window.location.href = "chat.html";

    } else {

        alert("Invalid Admin Credentials");

    }
}
