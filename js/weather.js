const API_KEY = "de8cfa934e846a994de537b79694d4de";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(reponse => reponse.json()).then(data =>{
        const weather =document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather span:last-child")
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        city.innerText = `📍${data.name}`;
    });

}

function onGeoError(){
    alert("no location info")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
