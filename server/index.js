require('dotenv').config(); // import once, for use of env variables thru-out application/api
const app = require('./app'); // main app >>> All dev inside this folder
const connectDB = require('./app/db/config'); // require the config file 

connectDB(); // connect to database

const PORT = process.env.PORT || 3000; // Use localhost port OR 3001 >>> local database or Atlas database. 

app.listen(PORT, () => { // event handler (listen) - console message
    console.log(`Server is running on port: ${PORT}`);
});

/* REF:
    1) https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production
    2) https://community.render.com/t/error-cannot-find-module/6781 to do a render deployment
    3) https://youtu.be/tNpoc86cHrQ
*/