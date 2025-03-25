const mongoose = require('mongoose');
const { Schema } = mongoose;

const weatherSchema = new mongoose.Schema({ // new class model
    data: Schema.Types.Mixed
});

module.exports = mongoose.model("Weather", weatherSchema); // defining the 'Weather' model

/* References >>>
    1) https://www.w3schools.com/mongodb/mongodb_schema_validation.php
    2) https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
    3) https://www.mongodb.com/docs/manual/core/schema-validation/
    4) https://stackoverflow.com/questions/66383516/add-mongoose-validation-for-phone-numbers
    5) https://www.geeksforgeeks.org/mongoose-schematype/
*/

// data: { // data schema for database from external api
//     coord: {
//         lon: { type: Number, required: true },
//         lat: { type: Number, required: true },
//     },
//     weather: [
//         {
//         id: { type: Number },
//         main: { type: String },
//         description: { type: String },
//         icon: { type: String },
//         }
//     ],
//     base: { type: String },
//     main: {
//         temp: { type: Number },
//         feels_like: { type: Number },
//         temp_min: { type: Number },
//         temp_max: { type: Number },
//         pressure: { type: Number },
//         humidity: { type: Number },
//         sea_level: { type: Number },
//         grnd_level: { type: Number },
//     },
//     visibility: { type: Number },
//     wind: {
//         speed: { type: Number },
//         deg: { type: Number },
//     },
//     clouds: { all: { type: Number } },
//     dt: { type: Number },
//     sys: {
//         type: { type: Number },
//         id: { type: Number },
//         country: { type: String },
//         sunrise: { type: Number },
//         sunset: { type: Number },
//     },
//     timezone: { type: Number },
//     id: { type: Number },
//     name: { type: String },
//     cod: { type: Number },
//     },