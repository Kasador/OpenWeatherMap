const router = require('express').Router();
const { getWeather } = require('../controller/weatherController'); // controller for main func to weather

router.get('/', getWeather);
// router.get('/:id', getWeatherById);
// router.post('/', createWeather);
// router.put('/:id', updateWeatherById);
// router.delete('/:id', deleteWeatherById);

module.exports = router;
