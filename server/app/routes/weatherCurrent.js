// >>> api/current/weather
const router = require('express').Router();
const { getCurrentWeather } = require('../controller/weatherController'); // controller for main func to weather

router.get('/', getCurrentWeather); // get by location (lat, lon) >> api/current/weather


module.exports = router;
