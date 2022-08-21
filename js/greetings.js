const loginInput = document.querySelector("#login-form input"); //login-form에 input값임
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 이후 코드 수정시 오류안나게끔 변수 설정, 대문자는 관습
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // submit의 기본동작(여기서는 form 을 submit하므로 새로고침)을 막고 원하는 기능을 할 수 있게 함
    loginForm.classList.add(HIDDEN_CLASSNAME); //hidden class를 통해 숨김처리 함
    const username = loginInput.value; //this line could be deleted. loginInput의 value값을 username변수에 저장함, 그 이름을 h1안에 넣어줌
    localStorage.setItem(USERNAME_KEY, username); //username -> loginInput.value 로 변경
    paintGreetings(username); // username could be deleted
}


function paintGreetings(username){
    // const username = localStorage.getItem(USERNAME_KEY); localStorage를 선택할 경우 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ //만약 username의 value가 null 이라면 즉 아무것도 저장 되지 않는다면 ?
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); //loginform의 hidden-class를 remove시키고
    loginForm.addEventListener("submit", onLoginSubmit); // onLoginSubmit 함수를 JS가 실행하도록 함
    // submit은 엔터를 누르거나 버튼을 클릭할 때 발생, 만약 아무것도 없다면 브라우저가 검증을 해줌(이 입력란을 작성하세요)
    // 새로고침이 일어나는건 form submit의 기본 동작

} else {
    // show the greetings
    paintGreetings(savedUsername); //savedUsername coule be deleted

}