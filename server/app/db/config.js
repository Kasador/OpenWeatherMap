const mongoose = require('mongoose'); // npm package for easy connection to MongoDB

const connectDB = async () => { // async func to connect to db, needs time
    try { // try to connect to db 
        const conn = await mongoose.connect(process.env.MONGODB_URI); // using env variables for db URI
        // useUnifiedTopology: true, is no longer needed; is a deprecated option
        console.log(`Connected to MongoDB successfully: ${conn.connection.host}.`);
    } catch (error) { // if connection failed; error out message
        console.error(error)
    } 
}

module.exports = connectDB;
