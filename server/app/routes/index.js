const router = require('express').Router();
const weatherCurrent = require('./weatherCurrent');
const weatherForecast = require('./weatherForecast');
const weatherData = require('./weatherData');
const weatherSearch = require('./weatherSearch');

router.get('/', (req, res) => { // main route to url/
    res.status(200).json({sucess: true, message: 'From /api...'});
});

router.use('/current/weather', weatherCurrent); // api/current/weather
router.use('/forecast/weather', weatherForecast); // api/forecast/weather
router.use('/weather', weatherData); // api/weather
router.use('/search', weatherSearch); // api/search

module.exports = router;