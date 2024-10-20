// scripts.js

// Global username and password that will always be valid
const globalUsername = "admin";
const globalPassword = "admin123";

// Function to register a new user
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        // Store the username and password in sessionStorage
        sessionStorage.setItem(username, password);
        document.getElementById('registerMessage').innerText = "Registration successful!";
        window.location.href="index.html";
    } else {
        document.getElementById('registerMessage').innerText = "Please enter both username and password.";
    }
}

//function to navigate on register page

function registration(){
    window.location.href = "register.html";
}

// Function to login a user
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if the entered credentials match the global username/password
    if (username === globalUsername && password === globalPassword) {
        window.location.href = "dashboard.html";
    } else {
        // Check if the entered credentials match any stored in sessionStorage
        const storedPassword = sessionStorage.getItem(username);
        if (storedPassword && storedPassword === password) {
            window.location.href = "dashboard.html";
        } else {
            document.getElementById('loginMessage').innerText = "Invalid username or password.";
        }
    }
}


//mehod to handle click on back to dashboard
function homepage(){
    window.location.href="dashboard.html";
}