require('dotenv').config(); // import once, for use of env variables thru-out application/api
const app = require('./api'); // main app >>> All dev inside this folder
const connectDB = require('./app/db/config'); // require the config file 

connectDB(); // connect to database

const PORT = process.env.PORT || 3001; // Use localhost port OR 3001 >>> local database or Atlas database. 

app.listen(PORT, () => { // event handler (listen) - console message
    console.log(`Server is running on port: ${PORT}`);
});