function fillLocation(name, coord) {
  const { lon, lat } = coord;
  document.getElementById('city-name').textContent = name;
  document.getElementById('longitude').textContent = lon;
  document.getElementById('latitude').textContent = lat;
}

function fillTemperature(main, weather) {
  const { main: weatherTitle, description, icon } = weather[0];
  const { temp, feels_like } = main;

  document.getElementById(
    'weather-icon'
  ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  document.getElementById('weather-main').textContent = weatherTitle;
  document.getElementById('weather-description').textContent = description;
  document.getElementById('temp-current').textContent = temp;
  document.getElementById('temp-current-feelings').textContent = feels_like;
}

function fillWindAndHumidity(main, wind) {
  const { humidity } = main;
  const { speed } = wind;

  document.getElementById('wind-speed').textContent = speed;
  document.getElementById('humidity').textContent = humidity;
}

function moreDetails(main, sys, timezone, visibility) {
  const { pressure, temp_min, temp_max } = main;
  const { sunset, sunrise } = sys;
  const tz = timezone / 3600;

  const converSunset = new Date(sunset * 1000);
  const converSunrise = new Date(sunrise * 1000);
  converSunrise.setHours(converSunrise.getHours() + tz);
  converSunset.setHours(converSunset.getHours() + tz);
  const newSunrise = converSunrise.toISOString();
  const newSunset = converSunset.toISOString();

  document.getElementById('pressure').textContent = pressure;
  document.getElementById('visibility').textContent = visibility;
  document.getElementById('temp-max').textContent = temp_max;
  document.getElementById('temp-min').textContent = temp_min;
  document.getElementById('sunrise').textContent = newSunrise.slice(11, 16);
  document.getElementById('sunset').textContent = newSunset.slice(11, 16);
}

export function showDetails() {
  const info = document.querySelector('.weather-info');
  info.classList.remove('hidden');
}

export function fillDetails(response) {
  const {
    cod,
    message,
    timezone,
    weather,
    sys,
    main,
    coord,
    wind,
    name,
    visibility,
  } = response;

  if (cod === '404') {
    alert('please enter existing city', message);
    return false;
  }

  fillLocation(name, coord);
  fillTemperature(main, weather);
  fillWindAndHumidity(main, wind);
  moreDetails(main, sys, timezone, visibility);
  showDetails();
}

export function fillBackgroundPhoto(response) {
  const img = response[0];
  const { urls } = img;
  getImage(urls);
}

function getImage(urls) {
  const { full } = urls;
  document.body.style.backgroundImage = `url(${full})`;
}
