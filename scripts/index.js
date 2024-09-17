import { WEATHER_API_DOMAIN } from './constants.js';
import { UNSPLESH_API_DOMAIN } from './constants.js';
import { ACCESS_KEY } from './constants.js';
import { fillDetails } from './showElements.js';
import { fillBackgroundPhoto } from './showElements.js';

const cityWeatherUrl = `${WEATHER_API_DOMAIN}&q=${city}`;
const cityWallUnspleshUrl = `${UNSPLESH_API_DOMAIN}?query=${city}&client_id=${ACCESS_KEY}&count=1`;

function getWeatherDetails(weatherUrl) {
  fetch(weatherUrl)
    .then((data) => data.json())
    .then(fillDetails)
    .catch((error) => {
      console.log(error);
      console.error(error.message);
      alert('something went wrong, please return to us in few minutes');
    });
}

function getCityWall(unspleshUrl) {
  fetch(unspleshUrl)
    .then((data) => data.json())
    .then(fillBackgroundPhoto)
    .catch((error) => {
      console.log(error);
      console.error(error.message);
      alert('have no photo');
    });
}

function handleSubmit(event) {
  event.preventDefault();
  const city = document.getElementById('city').value.trim();
  if (city?.length >= 1) {
    getWeatherDetails(cityWeatherUrl);
    getCityWall(cityWallUnspleshUrl);
  }
}

function weatherApp() {
  const form = document.getElementById('city-form');
  form.addEventListener('submit', handleSubmit);
}

weatherApp();
