/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/constants.js":
/*!******************************!*\
  !*** ./scripts/constants.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ACCESS_KEY: () => (/* binding */ ACCESS_KEY),\n/* harmony export */   UNSPLESH_API_DOMAIN: () => (/* binding */ UNSPLESH_API_DOMAIN),\n/* harmony export */   WEATHER_API_DOMAIN: () => (/* binding */ WEATHER_API_DOMAIN)\n/* harmony export */ });\nconst API_KEY = 'd98772e829a58cf89f62b52d79afd286';\nconst WEATHER_API_DOMAIN = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;\nconst ACCESS_KEY = 'AOuoLABszuT5mv1RCgxW2MBLbAhaMfi-VppmPh05MXs';\nconst UNSPLESH_API_DOMAIN = `https://api.unsplash.com/photos/random`;\n\n//# sourceURL=webpack://weather_app/./scripts/constants.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./scripts/constants.js\");\n/* harmony import */ var _showElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showElements.js */ \"./scripts/showElements.js\");\n\n\n\n\n\n\n//const cityWeatherUrl = `${WEATHER_API_DOMAIN}&q=${city}`;\nconst cityWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=50.27&lon=30.31&appid=d98772e829a58cf89f62b52d79afd286`;\nconst cityWallUnspleshUrl = `${_constants_js__WEBPACK_IMPORTED_MODULE_0__.UNSPLESH_API_DOMAIN}?query=${city}&client_id=${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ACCESS_KEY}&count=1`;\nfunction getWeatherDetails(weatherUrl) {\n  fetch(weatherUrl).then(data => data.json()).then(_showElements_js__WEBPACK_IMPORTED_MODULE_1__.fillDetails).catch(error => {\n    console.log(error);\n    console.error(error.message);\n    alert('something went wrong, please return to us in few minutes');\n  });\n}\nfunction getCityWall(unspleshUrl) {\n  fetch(unspleshUrl).then(data => data.json()).then(_showElements_js__WEBPACK_IMPORTED_MODULE_1__.fillBackgroundPhoto).catch(error => {\n    console.log(error);\n    console.error(error.message);\n    alert('have no photo');\n  });\n}\nfunction handleSubmit(event) {\n  event.preventDefault();\n  const city = document.getElementById('city').value.trim();\n  if (city?.length >= 1) {\n    getWeatherDetails(cityWeatherUrl);\n    getCityWall(cityWallUnspleshUrl);\n  }\n}\nfunction weatherApp() {\n  const form = document.getElementById('city-form');\n  form.addEventListener('submit', handleSubmit);\n}\nweatherApp();\n\n//# sourceURL=webpack://weather_app/./scripts/index.js?");

/***/ }),

/***/ "./scripts/showElements.js":
/*!*********************************!*\
  !*** ./scripts/showElements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillBackgroundPhoto: () => (/* binding */ fillBackgroundPhoto),\n/* harmony export */   fillDetails: () => (/* binding */ fillDetails),\n/* harmony export */   showDetails: () => (/* binding */ showDetails)\n/* harmony export */ });\nfunction fillLocation(name, coord) {\n  const {\n    lon,\n    lat\n  } = coord;\n  document.getElementById('city-name').textContent = name;\n  document.getElementById('longitude').textContent = lon;\n  document.getElementById('latitude').textContent = lat;\n}\nfunction fillTemperature(main, weather) {\n  const {\n    main: weatherTitle,\n    description,\n    icon\n  } = weather[0];\n  const {\n    temp,\n    feels_like\n  } = main;\n  document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;\n  document.getElementById('weather-main').textContent = weatherTitle;\n  document.getElementById('weather-description').textContent = description;\n  document.getElementById('temp-current').textContent = temp;\n  document.getElementById('temp-current-feelings').textContent = feels_like;\n}\nfunction fillWindAndHumidity(main, wind) {\n  const {\n    humidity\n  } = main;\n  const {\n    speed\n  } = wind;\n  document.getElementById('wind-speed').textContent = speed;\n  document.getElementById('humidity').textContent = humidity;\n}\nfunction moreDetails(main, sys, timezone, visibility) {\n  const {\n    pressure,\n    temp_min,\n    temp_max\n  } = main;\n  const {\n    sunset,\n    sunrise\n  } = sys;\n  const tz = timezone / 3600;\n  const converSunset = new Date(sunset * 1000);\n  const converSunrise = new Date(sunrise * 1000);\n  converSunrise.setHours(converSunrise.getHours() + tz);\n  converSunset.setHours(converSunset.getHours() + tz);\n  const newSunrise = converSunrise.toISOString();\n  const newSunset = converSunset.toISOString();\n  document.getElementById('pressure').textContent = pressure;\n  document.getElementById('visibility').textContent = visibility;\n  document.getElementById('temp-max').textContent = temp_max;\n  document.getElementById('temp-min').textContent = temp_min;\n  document.getElementById('sunrise').textContent = newSunrise.slice(11, 16);\n  document.getElementById('sunset').textContent = newSunset.slice(11, 16);\n}\nfunction showDetails() {\n  const info = document.querySelector('.weather-info');\n  info.classList.remove('hidden');\n}\nfunction fillDetails(response) {\n  const {\n    cod,\n    message,\n    timezone,\n    weather,\n    sys,\n    main,\n    coord,\n    wind,\n    name,\n    visibility\n  } = response;\n  if (cod === '404') {\n    alert('please enter existing city', message);\n    return false;\n  }\n  fillLocation(name, coord);\n  fillTemperature(main, weather);\n  fillWindAndHumidity(main, wind);\n  moreDetails(main, sys, timezone, visibility);\n  showDetails();\n}\nfunction fillBackgroundPhoto(response) {\n  const img = response[0];\n  const {\n    urls\n  } = img;\n  getImage(urls);\n}\nfunction getImage(urls) {\n  const {\n    full\n  } = urls;\n  document.body.style.backgroundImage = `url(${full})`;\n}\n\n//# sourceURL=webpack://weather_app/./scripts/showElements.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;