const router = require('express').Router();
const weatherRoutes = require('./weatherRoutes'); // routes api/v1/weather >>> Request Methods 

router.get('/', (req, res) => { // main route to api/v1
    res.status(200).json({sucess: true, message: `Request Made: ${req.method}`});
})

router.use('/geo-data', weatherRoutes); // api/v1/weather



module.exports = router;