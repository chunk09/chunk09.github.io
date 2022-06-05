const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();

  if (loginInput instanceof HTMLInputElement) {
    const username = loginInput.value;
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);

    if (loginForm instanceof HTMLElement) {
      loginForm.classList.add(HIDDEN_CLASSNAME);
    }

    paintGreetings(username);
  }
}
function paintGreetings(username) {
  if (greeting instanceof HTMLElement) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // 로그인창을 보여준다
  if (loginForm instanceof HTMLElement) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  }
} else {
  // 로그인이 되어있는 창을 보여준다
  paintGreetings(savedUsername);
}
