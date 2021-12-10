const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

function getClock() {
  date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  curTime = `${hour}:${min}:${sec}`;
  clock.innerText = curTime;
}

getClock();
setInterval(getClock, 1000);
