const images = [
    "0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //createElement를 통해 이전까지 html에서 요소들을 가져왔던 것에 비해 새로운 요소를 추가하는 작업을 할 수 있음

bgImage.src = `/img/${chosenImage}`; //src로 img폴더 뒤에 추가해줌 ?? ...

document.body.appendChild(bgImage); //bgImage만 했는데 src가 어떻게 추가될까 ? <img src="0.img">