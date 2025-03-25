// >>> api/geo-data
const router = require('express').Router();
const { getWeather } = require('../controller/weatherController'); // controller for main func to weather

router.get('/', getWeather); // get by location (lat, lon) >> api/geo-data/

module.exports = router;
