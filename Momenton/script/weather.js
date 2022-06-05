const API_KEY = "6f1941e4b5abb8c346bdd979020cb722";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    console.log(url);
    
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        if (city instanceof HTMLSpanElement) {
            city.innerText = data.name;
        }
        if (weather instanceof HTMLSpanElement) {
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        }
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
