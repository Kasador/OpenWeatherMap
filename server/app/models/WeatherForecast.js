const mongoose = require('mongoose');
const { Schema } = mongoose;

const weatherForecastSchema = new mongoose.Schema({ // new class model
    data: Schema.Types.Mixed
});

module.exports = mongoose.model("WeatherForecast", weatherForecastSchema); // defining the 'WeatherForecast' model

/* References >>>
    1) https://www.w3schools.com/mongodb/mongodb_schema_validation.php
    2) https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
    3) https://www.mongodb.com/docs/manual/core/schema-validation/
    4) https://stackoverflow.com/questions/66383516/add-mongoose-validation-for-phone-numbers
    5) https://www.geeksforgeeks.org/mongoose-schematype/
*/