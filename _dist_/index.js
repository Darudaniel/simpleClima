const cardHTML = document.getElementById('weather-card')
const searchButton = document.getElementById('searchButton')
// const url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b3c5b795472a53e62a3f64e0353a5aac"

function fullCard(city) {
  console.log(city)
  return (`
  <div class="card-container">
    <h2>${city.name}</h2>
    <h3>${city.main.temp}</h3>
  </div>
`)
}

async function apiRequest() {
  const searchedCity = await document.getElementById('search-input').value
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&APPID=b3c5b795472a53e62a3f64e0353a5aac`)
  const data = await response.json()

  const container = document.createElement('div')
  container.innerHTML = fullCard(data)
  cardHTML.append(container)
}

searchButton.addEventListener('click', apiRequest)


