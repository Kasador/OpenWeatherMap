const router = require('express').Router();
const weatherRoutes = require('./weatherRoutes');
const weatherData = require('./weatherData');

router.get('/', (req, res) => { // main route to url/
    res.status(200).json({sucess: true, message: 'From /api...'});
});

router.use('/geo-data', weatherRoutes); // api/geo-data
router.use('/weather', weatherData); // api/weather

module.exports = router;