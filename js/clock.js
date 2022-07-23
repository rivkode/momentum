const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //setInterval 함수가 1초 뒤에 실행되므로 최초로 실행시킨 후 interval함수를 호출
setInterval(getClock, 1000);

//"1".padStart(2, "0"); //문자열 길이는 2여야 함, 만약 그게 아니라면 앞에 0을 padStart함수를 통해 앞에 0을 채워줌
