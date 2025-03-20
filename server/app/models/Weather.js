const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({ // new class model
    "test": String
});

module.exports = mongoose.model("Weather", weatherSchema); // defining the 'Weather' model

/* References >>>
    1) https://www.w3schools.com/mongodb/mongodb_schema_validation.php
    2) https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
    3) https://www.mongodb.com/docs/manual/core/schema-validation/
    4) https://stackoverflow.com/questions/66383516/add-mongoose-validation-for-phone-numbers
*/