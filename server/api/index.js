const express = require('express');
const morgan = require('morgan');
const routeHandler = require('./routes/weatherRoutes');
const cors = require('cors'); // allow connection to frontend
const serverless = require('serverless-http');

const app = express();

// middlewares >>>
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => { // main route to url/
    res.status(200).json({sucess: true, message: 'API is running...'});
});

app.use('/api/geo-data', routeHandler); // /api/geo-data

// app.use('/api', routeHandler);

module.exports.handler = serverless(app);

/* Ref: 
    1) https://www.npmjs.com/package/serverless-http
    2) https://www.youtube.com/watch?v=B-T69_VP2Ls&ab_channel=CodingGarden
*/