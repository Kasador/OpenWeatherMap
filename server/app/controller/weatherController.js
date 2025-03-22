const Weather = require('../models/Weather'); // import the Weather model
const axios = require('axios');

const getWeather = async (req, res) => { // get all Weather func
    try {
        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: 'Api key is missing in env variables.',
                method: req.method,
            });
        }
        
        const lat = parseFloat(req.query.lat).toFixed(4); // for exact match, wasn't saving in database 36.2872832 vs 36.2873
        const lon = parseFloat(req.query.lon).toFixed(4);


        const checkLocation = await Weather.findOne({ // check to see if this is a new location, if so, then we need to hit external api again
            "data.coord.lat": lat,
            "data.coord.lon": lon,
        });

        console.log('Check Location Query:', {
            "data.coord.lat": lat,
            "data.coord.lon": lon,
        });

        console.log('checkLocation:', checkLocation); // see data from checkLocation

        if (checkLocation) {
            console.log('Data fetched from the database...');
            res.set('Cache-Control', 'no-store');

            return res.status(200).json({
                data: checkLocation.data,
                success: true,
                message: 'Request from database...',
                method: req.method,
            });
        };

        console.log('New data fetched from external API...');
        
        const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                lat,
                lon,
                appid: apiKey,
            },
        });

        // console.log('Weather API response:', weatherRes.data);
        const data = weatherRes.data;
        const newWeatherData = new Weather({
            data: data
        });

        console.log("saved data", newWeatherData);

        await newWeatherData.save(); // save to database

        res.set('Cache-Control', 'no-store');
        res.status(200).json({
            data: data,
            success: true,
            message: 'New data fetched from external API and saved to the database',
            method: req.method,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error fetching data.',
            method: req.method,
        });
    }
}

const getWeatherById = async (req, res) => { // get Weather by id func
    // const { id } = req.params;

    // try {
    //     const weatherData = await Weather.findById(id);

    //     res.status(200).json({
    //         data: weatherData,
    //         success: true,
    //         message: `Request Made: ${req.method} from Weather endpoint.`,
    //         id
    //     });
    // } catch (error) {
    //     if (error.name === "ValidationError") {
    //         console.error('Invalid', error);
    //         res.status(422).json(error);
    //     } else {
    //         console.error(error);
    //         res.status(500).json(error);
    //     }
    // }
}

const createWeather = async (req, res) => { // create new guest func
    // const { weather } = req.body;

    // try {
    //     const weatherData = await weatherData.create(weather); // name of schema - "Weather"
    //     console.log("data: ", weatherData); 

    //     res.status(200).json({
    //         data: weather,
    //         success: true,
    //         message: `Request Made: ${req.method} from Weather endpoint.`
    //     });
    // } catch (error) {
    //     if (error.name === "ValidationError") {
    //         console.error('Invalid', error);
    //         res.status(422).json(error);
    //     } else {
    //         console.error(error);
    //         res.status(500).json(error);
    //     }
    // }
}

const updateWeatherById = async (req, res) => { // update Weather by id func
    // const { id } = req.params;

    // try {
    //     const weather = await Weather.findByIdAndUpdate(id, req.body, { new: true }); // 3 params - schema, data, new set to true (new version, not old)

    //     res.status(200).json({
    //         data: weather,
    //         success: true,
    //         message: `Request Made: ${req.method} from Weather endpoint.`
    //     });
    // } catch (error) {
    //     if (error.name === "ValidationError") {
    //         console.error('Invalid', error);
    //         res.status(422).json(error);
    //     } else {
    //         console.error(error);
    //         res.status(500).json(error);
    //     }
    // }
}

const deleteWeatherById = async (req, res) => { // delete Weather by id func
    // const { id } = req.params;

    // try {
    //     const weather = await Weather.findByIdAndDelete(id);

    //     res.status(200).json({
    //         data: weather,
    //         success: true,
    //         message: `Request Made: ${req.method} from Weather endpoint.`,
    //         id
    //     });
    // } catch (error) {
    //     if (error.name === "ValidationError") {
    //         console.error('Invalid', error);
    //         res.status(422).json(error);
    //     } else {
    //         console.error(error);
    //         res.status(500).json(error);
    //     }
    // }
}

module.exports = { // export all funcs
    getWeather
    // getWeatherById,
    // createWeather,
    // updateWeatherById,
    // deleteWeatherById
}
