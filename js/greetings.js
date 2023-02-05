const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const todoForm = document.querySelector(".todo-form");
const placeholder = document.querySelector(".placeholder");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   event.preventDefault(); //브라우저의 기본동작을 막아줌(새로고침)
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
   todoForm.classList.remove(HIDDEN_CLASSNAME);
   placeholder.classList.add(HIDDEN_CLASSNAME);
}

function paintGreetings(username){
   greeting.classList.remove(HIDDEN_CLASSNAME);
   placeholder.classList.add(HIDDEN_CLASSNAME);
   greeting.innerText = `Hello ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   todoForm.classList.add(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
}else{
   paintGreetings(savedUserName)

}
