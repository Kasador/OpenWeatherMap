// >>> api/weather
const router = require('express').Router();
const { getWeatherByName } = require('../controller/weatherController'); // controller for main func to weather

router.get('/', getWeatherByName); // get by name >> api/weather/search/

module.exports = router;
