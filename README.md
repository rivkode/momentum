# momentum_web
---------------
## 목차
- 이 웹페이지를 만든 이유
- 웹 페이지 설명
- 코드 리뷰
    - html
    - greetings
    - clock
    - quotes
    - background
    - todo
    - weather
- 느낀점

------------------

## 내용
### 웹을 만든 이유
 > 웹을 통해 문법, JS를 사용해봄으로써 함수의 기능을 익히고 활용하기 위해, 결과라는 목적을 얻음으로써 성취감을 느끼기 위해, 브라우저의 기본 동작원리를 이해하고 사용자와 동적인 움직임을 JS를 통해 구현해보기 위해

### 웹페이지 설명
 > welcome 메세지와 현재 시간, 배경, 접속위치기반 날씨 정보, 랜덤한 글, todolist 저장 및 삭제 기능을 제공합니다. 새로고침 이후에도 이전에 입력되었던 정보들을 표현하기 위해 Localstorage를 사용하였으며 날씨 정보는 <a href="https://openweathermap.org" target="_blank"> openweather api</a>를 참고하였습니다.

### 코드리뷰
- ### html
html 구성은 input form, clock, todolist form, quotes, weather, background 로 이루어져있습니다. class와 id를 통해 JS가 html에 접근하도록 합니다.

class hidden은 css의 display none; 을 통해 html화면에 노출되지 않도록 설정합니다.



- ### greetings
**document**  
document는 브라우저에 이미 존재하는 object이며 document를 통해 html에 접근할 수 있습니다.
예를들어 html 의 title정보를 얻고싶다면 javascript에서 document.title 로 접근 가능합니다.  

**querySelector**  
html 의 id를 JS가 얻는 방법은 여러가지가 있지만(getElementById, queryselector 등) querySelector를 사용한 이유는 css방식으로 쉽게 element를 가져올 수 있기 때문입니다.

**const**  
쉬운 재활용, 바뀌면 안되는 항목들을 const 변수로 정해놓음으로써 이후 코드 수정시 오류 발생확률을 낮춰주게 됩니다.  

**event**  
브라우저에서 form을 submit하게 되면 submit의 기본동작(새로고침)이 됩니다. 새로고침을 막기 위해 브라우저를 eventDefault를 통해 제어합니다.  
그외에도 다양한 event가 있습니다. mouse click, mouse enter, mouse leave 등..  

**localStorage**  
크롬브라우저의 DB기능인 localstorage를 setItem을 사용해 key, value 형태로 정보를 저장하게 됩니다. 
여기서 key와 value가 이름이 동일하여 헷갈릴 수 있는데 key는 저장될 아이템의 이름이고, value는 username 변수입니다.  

**paintGreetings**  
위 함수를 이용해 사용자에게 Hello username 을 출력해주게 됩니다.  

**if 문**
새로고침 하더라도 이전에 입력했던 정보들을 출력하기 위해 localStorage 에 username의 값 value 유무를 판단하여 동작하게 하였습니다.  

**addEventListener**  
submit event가 발생하면 OnLoginSubmit함수가 실행이 됩니다.  

**새로고침**  
새로고침을 하게 되면 발생하는 일은 if문을 따라 form, h1이 모두 숨겨진 상태에서 localStorage 에 username의 값의 유무를 판단하여 출력합니다.  

**username**  
두가지 선택사항이 있을 수 있습니다. username을 두번 보낼지, 혹은 localStorage를 두번 열어볼지를 선택하는 것 입니다.  


- ### clock   

**const clock**  
clock 변수를 생성하였으며, html에서 요소를 가져왔습니다.  

**date**  
new Date() 객체는 이 객체 호출 당시의 현재 날짜와 시간정보를 제공합니다.  

**padStart**  
padStart, padEnd가 있으며
시간정보 제공시 1자리 수일 경우 10의 자리를 0으로 표시하기 위해 padStart함수를 사용하였습니다. padStart함수는 숫자를 사용할 수 없으므로 숫자를 string으로 변환하였습니다.  

**getClock**  
위 함수를 만나게 되면 함수를 실행하게 됩니다.

**setInterval**  
정해진 시간마다 function을 실행시킵니다. 1초마다 함수를 호출함으로써 시계의 기능을 만들어주었습니다(실제 시계가 아님, 시계처럼 보이게 하는 것).   

- ### quotes  
**Math(random, floor)**  
Math.random() 은 0부터 1까지의 랜덤한 숫자를 제공해줍니다. quotes의 배열 길이 곱해주어 랜덤숫자의 최대길이를 배열길이로 정하여 모든 quotes가 보이도록 하였습니다. Math.floor을 통해 내림을 하였습니다.  

- ### background  
**createElement**  
createElement를 통해 html element를 만들었습니다. 

    <img src="">  
를 입력한 것과 동일한 코드입니다.  

**append**  
body에 bgImage를 추가하여 배경이 보이도록 하였습니다.  

- ### todo  
**toDos**  
let으로 변수를 설정하여 이전에 입력된 요소들을 저장하고 불러오기 위해 빈 배열을 만들었습니다.  

**saveToDos**  
브라우저에 정보를 저장할때 localStorage를 활용할 수 있습니다.  
하지만 그냥 넣게 되면 배열이 아닌 단순 텍스트로만 입력이 됩니다. 우리가 원하는 입력은 string으로 입력하는 것입니다.  
배열로 넣기 위해 JSON.stringify(something) 를 사용하며 something을 string으로 만들어줍니다. 

**paintToDO**  
이전의 background와 같이 createElement를 사용하여 li, span, button 요소를 추가해주고 추가한 요소를 통해 todo 입력값을 출력하였습니다.  
addEventListnenr을 통해 함수를 실행시켜 삭제하는 역할을 합니다.  


**deleteToDo**  
target으로 parentElement를 통해 X표시가 눌려졌을때 어떤 위치에 X가 눌려졌는지 알 수 있습니다. remove로 li를 제거합니다(뒤에서 추가설정).  

**handleToDoSubmit**  
사용자가 form 을 submit하면 input을 비우고
입력된 value를 toDos array에 push하고 newtodo를 array에 push한 후 paintToDo로 화면에 출력 후 saveToDos로 저장합니다.  


**if문**  
parse를 통해 배열로 바꿈  

    toDos = parsedToDos
를 해줌으로써 새로고침시 savedToDos를 localStorage로부터 불러옴으로써 이전의 요소들을 저장함, 둘의 형식이 list이기 때문에 가능합니다.  
forEach는 a, b, c 를 각각 입력하였을때 요소하나하나에 대해서 아래와 같이 실행하게 됩니다.  

    paintToDo({text:"a", id:121212}), paintToDo(text:{"b"}, id:131313), paintToDo(text:{"c"}, id:141414)  

**delete with database**  
삭제시 화면에서는 li를 특정하여 없앨 수 있었지만 localStorage의 정보는 그대로 남아있기 때문에 새로고침을 하게되면 원래대로 돌아오게 됩니다. localStorage에서 삭제를 하기 위해 객체로 value를 생성하고 각 value마다 id를 부여하여 value를 특정합니다. id 부여시 Date.now 를 사용하여 랜덤한 숫자를 뽑아내었습니다.  
filter는 해당 함수를 실행시켜 true 반환시에만 값을 넘겨주게 되어 li.id를 특정하여 해당 id를 삭제 후 새로운 list를 만들어 저장하게됩니다.  
pareseInt를 통해 숫자로 string을 숫자로 바꿔주어 값이 같을 경우 false를 반환하여 해당 값을 제거한 새로운 배열을 만들게 됩니다.  


- #### weather  
**geolocation**  
geolocation을 통해 유저 위치를 얻어올 수 있습니다.  

**UrlApi**  
openweathermap 웹사이트를 통해 유저 위치기반으로 날씨정보를 제공받을 수 있습니다.  

**fetch**  
fetch api는 요청, 응답에 대해 js가 접근하고 비 동기적으로 조작할 수 있도록 합니다.  
fetch는 promise로 당장 발생하는 것이 아닌 시간이 지난 후 발생하는 것입니다. 만약 서버에 요청하였는데 응답이 5분이 걸린다고 가정하면 기본적으로는 5분을 기다려야 합니다.  
then이란 서버에서 데이터를 가져오는 작업(응답)이 돤료된 이후에 then의 인자에 들어있는 함수가 실행됩니다.  

**promise, then**  
promise - 비동기 코드가 끝나면 반환, 비동기 처리의 상태와 데이터를 담게 되어있습니다.  
then - 비동기 처리가 끝난 다음에 처리할 일을 정의할 수 있습니다.  


### 느낀점  
 >하나의 목표를 가지고 끝까지 완료를 해보니 개인적으로 코드 동작원리, 함수이해 등 여러방면에서 많이 부족함을 느꼈습니다.(사실 거의 모든 부분..) 대신 함수의 기능, 브라우저의 제어를 간단하게 구현하고 동작시켜봄으로써 JS를 통해 동적으로 사용자와 인터렉티브하게 작동할 수 있는점을 알 수 있었습니다.  
 >가장 기본적인 투두리스트, api정보 받아오기였지만 의미있는 시간들을 보낸 것 같아 뿌듯하며 부족함을 느낀만큼 다음 코드를 만들때 지금의 실수를 하지 않고 더 빠르게 이해, 적용하여 읽기 좋은 코드를 위해 노력하겠습니다.