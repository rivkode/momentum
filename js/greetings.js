const loginInput = document.querySelector("#login-form input"); //login-form에 input값임
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // 동작 브라우저의 동작을 막고 원하는 기능을 할 수 있게 함
    loginForm.classList.add(HIDDEN_CLASSNAME); // form에 hidden이라는 class를 추가함, 그러므로 form 과 h1은 같은 class를 가짐
    const username = loginInput.value; //loginInput의 값을 변수에 저장함
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ //만약 username 이 null 이라면
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); //loginform의 hidden-class를 remove시키고
    loginForm.addEventListener("submit", onLoginSubmit); //onloginsubmit함수를 실행시킨다

} else {
    // show the greetings
    paintGreetings(savedUsername);
}