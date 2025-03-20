require('dotenv').config(); // import once, for use of env variables thru-out application/api
const app = require('./app'); // main app >>> All dev inside this folder
const connectDB = require('./app/db/config'); // require the config file 

connectDB(); // connect to database

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { // event handler (listen) - console message
    console.log(`Server is running on port: ${PORT}`);
});