const API_KEY = "210f26a59065129954a6740cd71571b7"

const onGeoOk = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    const dataObj = await(await fetch(url)).json();

    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child")

    weather.innerText = `${dataObj.weather[0].main} / ${dataObj.main.temp}℃`;
    city.innerText = `(${dataObj.name})`;
}

function onGeoError(){
    alert("can't find location");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);