const router = require('express').Router();
const { getAllWeather, getWeatherById, createWeather, updateWeatherById, deleteWeatherById } = require('../controller/weatherController'); // controller for main func to guests

router.get('/', getAllWeather);
router.get('/:id', getWeatherById);
router.post('/', createWeather);
router.put('/:id', updateWeatherById);
router.delete('/:id', deleteWeatherById);

module.exports = router;
