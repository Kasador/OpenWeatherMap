const mongoose = require('mongoose'); // npm package for easy connection to MongoDB

const connectDB = async () => { // async func to connect to db, needs time
    try { // try to connect to db 
        const dbURI = process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@weatherapp.jw0sf.mongodb.net/?retryWrites=true&w=majority&appName=WeatherApp`;
        const conn = await mongoose.connect(dbURI); // connect to db using env variables

        console.log(`Connected to MongoDB successfully: ${conn.connection.host}.`);
    } catch (error) { // if connection failed; error out message
        console.error('Error connecting to database: ', error);
    } 
}

module.exports = connectDB;

// REF: https://www.mongodb.com/docs/manual/reference/connection-string/?utm_source=compass&utm_medium=product#mongodb-urioption-urioption.authSource