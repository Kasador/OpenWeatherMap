const router = require('express').Router();
const { getWeather, } = require('../controller/weatherController'); // controller for main func to guests

router.get('/', getWeather);
// router.get('/:id', getWeatherById);
// router.post('/', createWeather);
// router.put('/:id', updateWeatherById);
// router.delete('/:id', deleteWeatherById);

module.exports = router;
