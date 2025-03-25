const Weather = require('../models/Weather'); // import the Weather model
const WeatherForecast = require('../models/WeatherForecast');
const axios = require('axios');

const getCurrentWeather = async (req, res) => { // get current Weather func
    try {
        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: 'Api key is missing in env variables.',
                method: req.method,
            });
        }
        
        const lat = parseFloat(req.query.lat); // toFixed(4) no longer needed with $gte and $lte for the small differences 
        const lon = parseFloat(req.query.lon);

        console.log('Received Lat:', lat);
        console.log('Received Lon:', lon);

        // Ref: https://www.w3schools.com/mongodb/mongodb_query_operators.php
        const checkLocation = await Weather.findOne({ // check to see if this is a new location, if so, then we need to hit external api again
           "data.coord.lat": { $gte: lat - 0.0001, $lte: lat + 0.0001 }, // for small differences, wasn't saving in database 36.2872832 vs 36.2873
            "data.coord.lon": { $gte: lon - 0.0001, $lte: lon + 0.0001 },
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
                message: `Request Made: ${req.method} from /api/current/weather endpoint. Request from database...`,
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
            message: `Request Made: ${req.method} from /api/current/weather endpoint. Request from external API...`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error fetching data.',
            method: req.method,
        });
    }
}

const getForecastWeather = async (req, res) => { // get forecast Weather func
    try {
        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: 'Api key is missing in env variables.',
                method: req.method,
            });
        }
        
        const lat = parseFloat(req.query.lat); // toFixed(4) no longer needed with $gte and $lte for the small differences 
        const lon = parseFloat(req.query.lon);

        console.log('Received Lat:', lat);
        console.log('Received Lon:', lon);

        // Ref: https://www.w3schools.com/mongodb/mongodb_query_operators.php
        const checkLocation = await WeatherForecast.findOne({ // check to see if this is a new location, if so, then we need to hit external api again
           "data.city.coord.lat": { $gte: lat - 0.0001, $lte: lat + 0.0001 }, // for small differences, wasn't saving in database 36.2872832 vs 36.2873
            "data.city.coord.lon": { $gte: lon - 0.0001, $lte: lon + 0.0001 },
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
                message: `Request Made: ${req.method} from /api/forecast/weather Request from database...`,
            });
        };

        console.log('New data fetched from external API...');
        
        const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
                lat,
                lon,
                appid: apiKey,
            },
        });

        // console.log('Weather API response:', weatherRes.data);
        const data = weatherRes.data;
        const newWeatherData = new WeatherForecast({
            data: data
        });

        console.log("saved data", newWeatherData);

        await newWeatherData.save(); // save to database

        res.set('Cache-Control', 'no-store');
        res.status(200).json({
            data: data,
            success: true,
            message: `Request Made: ${req.method} from /api/forecast/weather Request from external API...`,
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
    try {
        const { id } = req.params;
        const data = await Weather.findById(id);

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Weather data not found.",
                id
            });
        }

        res.status(200).json({
            data,
            success: true,
            message: `Request Made: ${req.method} from /api/weather endpoint.`,
            id
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const getAllWeather = async (req, res) => { // get Weather by id func
    try {
        console.log('Queries: ', req.query);
        const data = await Weather.find({}); // make queries strings for get back selective weather and not everything. 

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Weather data not found.",
                id
            });
        }

        res.status(200).json({
            data,
            success: true,
            message: `Request Made: ${req.method} from /api/weather endpoint.`
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const getWeatherByName = async (req, res) => { // get Weather by name func http://localhost:3000/api/search?name=Eastland%20Heights
    try {
        console.log('Queries: ', req.query);
        // const { name } = req.query; // get name from the query
        const data = await Weather.find({
            "data.name": req.query.name
        });

        if (data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Weather data not found by that name.",
            });
        }

        res.status(200).json({
            data,
            success: true,
            message: `Request Made: ${req.method} from /api/weather endpoint.`
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const createWeather = async (req, res) => { // create new guest func
    try {
        const { data } = req.body;
        const newWeather = new Weather({
            data: data
        });

        const newWeatherData = await newWeather.save();
        console.log("New Weather Data: ", newWeatherData); 

        res.status(200).json({
            data: newWeatherData,
            success: true,
            message: `Request Made: ${req.method} from /api/weather endpoint.`
        });

    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const updateWeatherById = async (req, res) => { // update Weather by id func
    try {
        const { id } = req.params;
        const updatedWeather = await Weather.findByIdAndUpdate(id, { $set: req.body }, { new: true }); // 3 params - schema, data, new set to true (new version, not old)
        console.log('Received Data:', req.body);

        if (!updatedWeather) {
            return res.status(404).json({
                success: false,
                message: "Weather data not found.",
                id
            });
        }

        res.status(200).json({
            data: updatedWeather,
            success: true,
            message: `Request Made: ${req.method} from /api/weather endpoint.`
        });

    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const deleteWeatherById = async (req, res) => { // delete Weather by id func
    try {
        const { id } = req.params;
        const weather = await Weather.findByIdAndDelete(id);

        res.status(200).json({
            data: weather,
            success: true,
            message: `Request Made: ${req.method} from /api/weather endpoint.`,
            id
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = { // export all funcs
    getCurrentWeather,
    getForecastWeather,
    getAllWeather,
    getWeatherById,
    createWeather,
    updateWeatherById,
    deleteWeatherById,
    getWeatherByName
}
