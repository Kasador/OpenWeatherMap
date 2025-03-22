// >>> api/weather
const router = require('express').Router();
const { getAllWeather, getWeatherById, deleteWeatherById, updateWeatherById, createWeather } = require('../controller/weatherController'); // controller for main func to weather

router.get('/', getAllWeather); // get all >> api/weather/
router.get('/:id', getWeatherById); // get by id >> api/weather/
router.post('/', createWeather); // post >> api/weather/
router.put('/:id', updateWeatherById); // update by id >> api/weather/
router.delete('/:id', deleteWeatherById); // delete >> api/weather/

module.exports = router;
