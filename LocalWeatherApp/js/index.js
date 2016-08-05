$(document).ready(function() {

  var temp, tempF, tempC;
  /*openWeather = "http://api.openweathermap.org/data/2.5/weather?id=4341513&APPID=71cfd3707f340e2292aac7c5274f16e2",*/
  
  //openWeather = "";

  /*if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var openWeather = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=71cfd3707f340e2292aac7c5274f16e2";
      getLocation(openWeather);
    });
  }*/

  $.getJSON("http://ipinfo.io/json?", function(json) {
    var openWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + json.city + "," + json.country +
      "&APPID=71cfd3707f340e2292aac7c5274f16e2";
    getLocation(openWeather);
  });

});

$("#temp").click(function() {
  var temp = $("#temp");
  if (temp.html() == tempF + "°F") {
    temp.html(tempC + "°C");
  } else {
    temp.html(tempF + "°F");
  }
});

function getLocation(openWeather) {

  $.getJSON(openWeather, function(json) {
    console.log(json);
    temp = +json.main.temp;
    tempF = Math.round(temp * (9 / 5) - 459.67);
    tempC = Math.round(temp - 273.15);

    if (tempF <= 32) {

      document.body.style.backgroundImage = "url('http://www.siwallpaperhd.com/wp-content/uploads/2015/06/awesome_weather_wallpaper_hd_14.jpg')";
      
    } else if (json.weather[0].main === "Rain" || json.weather[0].main === "Drizzle") {
      
      document.body.style.backgroundImage = "url('https://dearworldandtrulyyours.files.wordpress.com/2013/12/rain-wallpapers-photos.jpg')";

      $("h1, h2").css("background", "rgba(255, 255, 255, 1)");
      
    } else {
      
      document.body.style.backgroundImage = "url('http://www.greenwallpaperhd.com/wp-content/uploads/Beautiful%20green/Sunny%20meadow%20green%20wallpaper.jpg')";
      
    }

    $("#temp").html(tempF + "°F");
    $("#city").html(json.name + ", " + json.sys.country);
  });
}