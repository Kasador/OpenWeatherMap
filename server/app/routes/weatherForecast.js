// >>> api/forecast/weather
const router = require('express').Router();
const { getForecastWeather } = require('../controller/weatherController'); // controller for main func to weather

router.get('/', getForecastWeather); // get by location (lat, lon) >> api/forecast/weather


module.exports = router;
