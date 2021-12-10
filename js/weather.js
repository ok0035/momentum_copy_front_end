const API_KEY = "e145ab65f0c96f9b315d478026b624c1";

function onGeoOk(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log("You live in " + lat + ", " + lng);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.dir(data);
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            weather.innerText = data.weather[0].main;
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
