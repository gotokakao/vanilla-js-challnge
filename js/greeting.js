const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const saveUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreeting(saveUsername);
}