const router = require('express').Router();
const weatherRoutes = require('./weatherRoutes');
const weatherData = require('./weatherData');
const weatherSearch = require('./weatherSearch');

router.get('/', (req, res) => { // main route to url/
    res.status(200).json({sucess: true, message: 'From /api...'});
});

router.use('/geo-data', weatherRoutes); // api/geo-data
router.use('/weather', weatherData); // api/weather
router.use('/search', weatherSearch);

module.exports = router;