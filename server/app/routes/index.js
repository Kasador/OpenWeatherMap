const router = require('express').Router();
const weatherRoutes = require('./weatherRoutes');

router.get('/', (req, res) => { // main route to url/
    res.status(200).json({sucess: true, message: 'From /api...'});
});

router.use('/geo-data', weatherRoutes); // /api/geo-data

module.exports = router;