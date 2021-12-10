// 기본적으로 const를 이용해서 변수를 생성하고, 변경할 여지가 있는 값들만 let으로 사용한다. 그렇다면 var는?
// let은 재선언이 금지되어 있는 반면, var는 재선언이 가능하기 떄문에 어느위치에서 초기화를 했는지 알기가 어렵다.
// 즉, const와 let만을 사용하는 것이 좋다.

/*
document는 HTML에 작성한 데이터를 읽어서 js의 형식으로 보여주는 것.
document를 이용하여 html에 접근하여 값을 변경할 수 있다.

document.querySelector(".hello h1");
쿼리 셀렉터를 자주 사용한다. 클래스, 아이디와 태그를 같이 검색할 수 있기 떄문
querySelector는 첫번째 태그만 가지고옴.
querySelectorAll은 모든 태그를 다 가져옴.
*/

// function sayHello(name) {
//   const hello = "Hello my name is " + name;
//   console.log(hello);
// }

// sayHello("youngdo");

// const calcurator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   times: function (a, b) {
//     return a * b;
//   },
//   devide: function (a, b) {
//     return a / b;
//   },
// };

// const title = document.getElementById("title");
// title.innerText = "Got you!";
// const h1 = document.querySelector(".hello h1");
// console.log(h1);

// function handleTitleClick() {
//   const clickedClass = "clicked";

//   // if (h1.classList.contains(clickedClass)) {
//   //   h1.classList.remove(clickedClass);
//   // } else {
//   //   h1.classList.add(clickedClass);
//   // }

//   h1.classList.toggle(clickedClass);
// }

// function handleMouseEnter() {
//   h1.innerText = "mouse is here";
// }

// h1.addEventListener("click", handleTitleClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
    greeting.innerText = `안녕하세요. ${username} 님`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "안녕하세요. " + USERNAME_KEY + "님";
    paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

const saveUsername = localStorage.getItem(USERNAME_KEY);

console.log(saveUsername);

if (saveUsername === null) {
    console.log("you need a login");
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    greeting.classList.add(HIDDEN_CLASS_NAME);
    greeting.innerText = "";
} else {
    console.log("logined");
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    paintGreetings(saveUsername);
}
