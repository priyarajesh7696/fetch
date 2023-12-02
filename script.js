const url = "https://restcountries.com/v3.1/all";
const result = fetch(url);
result
  .then((data) => data.json())
  .then((ele) => {
    for (let i = 0; i < ele.length; i++) {
      const div = document.createElement("div");
      div.className = "container";
      div.innerHTML = `<div class="row">
      <div class="col col-lg-3 col-sm-12">
         <div class="card">
         <div class="card-header">${ele[i].name.common} </div>
           <img src="${ele[i].flags.png}" class="card-img-top" alt="country-flag">
           <div class="card-body">
             <p class="card-text"><b><i>Capital: ${ele[i].capital}</i></b></p>
             <p class="card-text"><b><i>Region: ${ele[i].region}</b></p>
             <p class="card-text"><b><i>latlng: ${ele[i].latlng}</i></b></p>
             <p class="card-text"><b><i>Population: ${ele[i].population}</i></b></p>
             <p class="card-text"><b><i>NativeName: ${ele[i].name.official}</i></b></p>
             <p class="card-text"><b><i>Country Code: ${ele[i].cca3}</i></b></p>
             <button class="btn btn-primary" onclick="getWeatherData('${ele[i].name.common}')">Click for Weather</button>
  
             </div>
           </div>
         </div>
       </div>`;

      document.body.append(div);
    }
    const h1 = document.createElement("h1");
      h1.className = "text-center";
      h1.id = "title";
      h1.color="red";
      h1.innerText = "Rest Countries Name";
      document.body.append(h1);

  });
function getWeatherData(countryName) {
  var apiKey = "eebfc7ad50c4a39e555028ff4aee7c38";
  var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((weatherData) => {
      var weatherCountryName = weatherData.name;

      if (weatherCountryName === countryName) {
        alert(
          `Weather in ${weatherData.name}: ${weatherData.main.temp_min} min:deg&c && ${weatherData.main.temp_max} max:deg&c`
        );
      } else {
        alert("Country names do not match.");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert`Error fetching weather data.`;
    });
}