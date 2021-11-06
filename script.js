async function getInfo(){
    var readInfo = await (await fetch("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139")).json()
    console.log(readInfo.weather[0].description)
// var temp = 
    document.getElementById("temp").innerHTML="Temperature: "+readInfo.main.temp
    document.getElementById("humidity").innerHTML="Humidity: "+readInfo.main.humidity
    document.getElementById("pressure").innerHTML="Pressure: "+readInfo.main.pressure
document.getElementById("description").innerHTML = "Description: "+readInfo.weather[0].description

}