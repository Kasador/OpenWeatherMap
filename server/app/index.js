const express = require('express');
const morgan = require('morgan');
const app = express();
const routeHandler = require('./routes');
const cors = require('cors'); // allow connection to frontend

// middlewares >>>
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => { // main route to url/
    res.status(200).json({sucess: true, message: 'API is running...'});
});

app.use('/api', routeHandler); // use middleware to have routes for /api/v1/

module.exports = app;