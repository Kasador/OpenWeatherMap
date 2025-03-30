# 🗂 Overview to Weather App

[![Development Tools](https://skillicons.dev/icons?i=vscode,windows,apple,github)](https://skillicons.dev)

[![Development Status](https://api.netlify.com/api/v1/badges/6f73d827-fc3a-4e3c-9805-0f9b063a117a/deploy-status)](https://app.netlify.com/sites/hunterstevenshaw-weatherapp/deploys)

**🌐 [https://github.com/Kasador/OpenWeatherMap.git](https://github.com/Kasador/OpenWeatherMap.git)**

### 🔗🚧 **Development Server**: [https://hunterstevenshaw-weatherapp.netlify.app/](https://hunterstevenshaw-weatherapp.netlify.app/)

## 🖥️ The Weather App

Repository made to create/develop a small weather app. Using the **_OpenWeatherMap API_**, I will develop a the weather app using the MERN tech stack connecting the data to my API and then from there, storing the data into MongoDB. This app is built using _**npm create vite@latest**_ for the frontend. The new tech stack is designed for simplicity, performance, and ease of content management for future development and maintenance.

## 💯🚀🎯 Major Achievements

### **🎉⛃ Connected backend to frontend; now pulling data from _Atlas_ MongoDB. ⤸**

### ╰┈➤ **🌐 Live dev URL:** [https://hunterstevenshaw-weatherapp.netlify.app/](https://hunterstevenshaw-weatherapp.netlify.app/)

- Using Render _(https://render.com/)_ to host my Express/NodeJS app.
- Connected _backend_ to _frontend_. 
- Edited and saved _.env_ variables to make sure all data is secure and used correctly. 
- Changed and added error handling for _URL/endpoints_.
- Parsed data correctly and got back a formatted _JSON Response_.
- Used from _API_. **(External API > Atlas MongoDB database > Own API > Client)**
- Operation **_fullstack_** application w/ connections and hosting of both the _backend_ and _frontend_. 
- Gained **_+5,600xp_** and **_+2_** whole levels. I can now train to use the spell **_🔥 Pyroblast_**. 

![Image](https://github.com/user-attachments/assets/e76354ce-bfcf-4196-a00a-598da881fc8d)

![Image](https://github.com/user-attachments/assets/c80bc091-099e-4687-b782-e90dd35c8ab6)

### **🎨🖌️🌦️ Added & Styled Nav Header Graphic. ⤸**

### ╰┈➤ **🤖📑 Reference:** [Reddit Post](https://www.reddit.com/r/identifythisfont/comments/1d80ljo/what_font_or_close_enough_font_is_weather/)

- _https://www.reddit.com/r/identifythisfont/comments/1d80ljo/what_font_or_close_enough_font_is_weather/_

- _Find my solution/code in the **🛠️ Progress** section below. ⤸_

<img src="https://github.com/user-attachments/assets/bd6a8c83-f84b-41e9-bcda-442ad26cf8a6" width="400px" />
<br><br>
<img src="https://github.com/user-attachments/assets/f7e4df2b-e0d8-4beb-b867-0ad5702bead8" width="400px" />
<br><br>
<img src="https://github.com/user-attachments/assets/0679219f-15e9-4abf-9ba5-875111957613" width="800px" />

# ⚛️ **Tech Stack Overview (MERN)** 

[![Tech Stack Icons](https://skillicons.dev/icons?i=js,html,css,react)](https://skillicons.dev)

[![Tech Stack Icons](https://skillicons.dev/icons?i=nodejs,express,scss,vite)](https://skillicons.dev)

[![Tech Stack Icons](https://skillicons.dev/icons?i=mongodb,npm,postman,netlify)](https://skillicons.dev)

### 📘 **Frontend**

- **ReactJS**: For building a dynamic, responsive, and component-based UI.

- **SASS**: For styling with ease for CSS classes, maintaining a consistent and clean design for UI/UX.

### 📖 **Backend & Asset Management**

- **NodeJS/Express**: Developing and creating an API using the MERN stack to update backend.

- **MongoDB/Mongoose**: Storing critical data as structured records.

### 🧪 **Testing/development**

- **Postman**: For testing and developing the endpoints for backend development.

- **Nodemon**: For restarting server on save.

- **Netlify**: For frontend development, testing on _live_ server. Deployment for **client-side**. _(https://www.netlify.com/)_

- **Render**: For backend development, testing on _live_ server. Deployment for **server-side**. _(https://render.com/)_

### 📑 **Prerequisites**

- Node.js and npm installed.

- Create a React App _with_ Vite.

- Using this article, [freecodecamp.org](https://www.freecodecamp.org/news/how-to-create-a-react-app-in-2024/#:~:text=Create%20React%20App%20has%20been,new%20React%20project%20in%202024.).

- **_npm create vite@latest_**

### React + Vite
  
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 📦 npm - Dependencies/Packages

- `npm i express`
- `npm i morgan`
- `npm i dotenv`
- `npm i -D nodemon`
- `npm i mongoose`
- `npm create vite@latest`
- `npm i concurrently --save-dev`
- `npm i axios`
- `npm i cors`
- `npm i react-router`
- `npm i react-icons`
- `npm i weather-icons-react --save`

### Icon Documentation

- https://najens.github.io/weather-icons-react/
- https://react-icons.github.io/react-icons/

# 🛠️ Progress

### **✨⚙️ Setup _Complete_ ⤸**

- Add to the root of the project folder.
```json
"scripts": {
    "dev": "concurrently \"npm run dev --prefix client\" \"npm run dev --prefix server\""
  },
  ```

  ```bash
  $ npm run dev

> dev
> concurrently "npm run dev --prefix client" "npm run dev --prefix server"

[1] 
[1] > dev
[1] > nodemon server.js
[1]
[0]
[0] > weather-client@0.0.0 dev
[0] > vite
[0]
[1] [nodemon] 3.1.9
[1] [nodemon] to restart at any time, enter `rs`
[1] [nodemon] watching path(s): *.*
[1] [nodemon] watching extensions: js,mjs,cjs,json
[1] [nodemon] starting `node server.js`
[0]
[0]   VITE v6.2.2  ready in 104 ms
[0]
[0]   ➜  Local:   http://localhost:5173/
[0]   ➜  Network: use --host to expose
[1] Server is running on port: 3000
[1] Connected to MongoDB successfully: 127.0.0.1.
[1] GET /api/v1/weather 304 5.502 ms - -
```

- [x] Set up **client-side**.
- [x] Set up **server-side**.
- [x] Connect **MongoDB** database.

![Image](https://github.com/user-attachments/assets/ea919864-620c-4b20-b629-62ef6e369091)

### **🎉🤝 Connected _Frontend to Backend_ ⤸**

![Image](https://github.com/user-attachments/assets/4fbe9da3-b50c-47e8-8854-99a98ff81c02)

### **💾🛢 Pull data from database _if available._ ⤸**

**_server/app/controller/weatherController.js_**

```js
const getWeather = async (req, res) => { // get all Weather func
    try {
        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: 'Api key is missing in env variables.'
            });
        }
        
        const { lat, lon } = req.query; // get location on query

        const checkLocation = await Weather.findOne({ // check to see if this is a new location, if so, then we need to hit external api again
            "data.coord.lat": lat,
            "data.coord.lon": lon,
        });

        console.log('checkLocation:', checkLocation); // see data from checkLocation

        if (checkLocation) {
            console.log('Data from db');
            return res.status(200).json({
                data: checkLocation.data,
                success: true,
                message: 'Request from database...'
            });
        };

        console.log('New fetch request from external API...');
        
        const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                lat,
                lon,
                appid: apiKey,
            },
            message: 'New fetch request from external API...'
        });

        // console.log('Weather API response:', weatherRes.data);
        const data = weatherRes.data;
        const newWeatherData = new Weather({
            data: data
        });

        await newWeatherData.save(); // save to database

        res.status(200).json({
            data: data,
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error fetching data.',
            method: req.method,
        });
    }
}
```

![Image](https://github.com/user-attachments/assets/ce3f3dac-f2e8-42ba-96cd-51528730adbd)

![Image](https://github.com/user-attachments/assets/dbcb7e16-5ec2-4779-b0e5-f308b4abd4e8)

### **⛃ ☁︎ Connected database to Atlas for _live dev server_. ⤸**

### **‼️Important**

**_Reference:_** 

- [Netlify Docs](https://www.netlify.com/integrations/mongodb/)

- [MongoDB Docs](https://www.mongodb.com/developer/languages/javascript/developing-web-application-netlify-serverless-functions-mongodb/)

**_server/app/db/config.js_**

**Make sure to add this line to your _config.js_ file.**

- _Edit this string in your **.env** file:_

`'mongodb+srv://$username:$password@$cluster.mongodb.net/$dbname?retryWrites=true&w=majority&appName=$appname';`

```js 
const dbURI = process.env.MONGODB_URI || process.env.MONGO_URI_ATLAS;
const conn = await mongoose.connect(dbURI); // Connect to either localhost OR Atlas database.
```

**_server/server.js_**

**Make sure you do **NOT** add your _PORT_ env variable to dev server and have your _PORT_ variable like this.**

```js
const PORT = process.env.PORT || 3001; // Use localhost port OR 3001 >>> local database or Atlas database. 
```

- Use variables in _.env_ and replace with your real data.
- Upload and add your variables from _.env_ to your dev server.
- Make sure to edit your _settings_ on Atlas.
- Change the _URL_ on your fetch request to the _dev server_ on the **client-side**.
- Update the _Network Access_ settings in your **Atlas Console** to include your dev server.
- Add _admin permissions_ to a user for connection. 
 
![Image](https://github.com/user-attachments/assets/aade7f7e-256e-43bf-a343-8ac275e22c80)

### **⛃ Updated controller/API to have _CRUD_ operations. ⤸**

**_server/app/weatherController.js_**

```js
const Weather = require('../models/Weather'); // import the Weather model
const axios = require('axios');

const getWeather = async (req, res) => { // get all Weather func
    try {
        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: 'Api key is missing in env variables.',
                method: req.method,
            });
        }
        
        const lat = parseFloat(req.query.lat).toFixed(4); // for exact match, wasn't saving in database 36.2872832 vs 36.2873
        const lon = parseFloat(req.query.lon).toFixed(4);


        const checkLocation = await Weather.findOne({ // check to see if this is a new location, if so, then we need to hit external api again
            "data.coord.lat": lat,
            "data.coord.lon": lon,
        });

        console.log('Check Location Query:', {
            "data.coord.lat": lat,
            "data.coord.lon": lon,
        });

        console.log('checkLocation:', checkLocation); // see data from checkLocation

        if (checkLocation) {
            console.log('Data fetched from the database...');
            res.set('Cache-Control', 'no-store');

            return res.status(200).json({
                data: checkLocation.data,
                success: true,
                message: `Request Made: ${req.method} from /api/geo-data endpoint. Request from database...`,
            });
        };

        console.log('New data fetched from external API...');
        
        const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                lat,
                lon,
                appid: apiKey,
            },
        });

        // console.log('Weather API response:', weatherRes.data);
        const data = weatherRes.data;
        const newWeatherData = new Weather({
            data: data
        });

        console.log("saved data", newWeatherData);

        await newWeatherData.save(); // save to database

        res.set('Cache-Control', 'no-store');
        res.status(200).json({
            data: data,
            success: true,
            message: `Request Made: ${req.method} from /api/geo-data endpoint. Request from external API...`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error fetching data.',
            method: req.method,
        });
    }
}

const getWeatherById = async (req, res) => { // get Weather by id func
    try {
        const { id } = req.params;
        const data = await Weather.findById(id);

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Weather data not found.",
                id
            });
        }

        res.status(200).json({
            data,
            success: true,
            message: `Request Made: ${req.method} from /api/weather endpoint.`,
            id
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const getAllWeather = async (req, res) => { // get Weather by id func
    try {
        const data = await Weather.find({});

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Weather data not found.",
                id
            });
        }

        res.status(200).json({
            data,
            success: true,
            message: `Request Made: ${req.method} from /api/weather endpoint.`
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const createWeather = async (req, res) => { // create new guest func
    try {
        const { data } = req.body;
        const newWeather = new Weather({
            data: data
        });

        const newWeatherData = await newWeather.save();
        console.log("New Weather Data: ", newWeatherData); 

        res.status(200).json({
            data: newWeatherData,
            success: true,
            message: `Request Made: ${req.method} from /api/weather endpoint.`
        });

    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const updateWeatherById = async (req, res) => { // update Weather by id func
    try {
        const { id } = req.params;
        const updatedWeather = await Weather.findByIdAndUpdate(id, { $set: req.body }, { new: true }); // 3 params - schema, data, new set to true (new version, not old)
        console.log('Received Data:', req.body);

        if (!updatedWeather) {
            return res.status(404).json({
                success: false,
                message: "Weather data not found.",
                id
            });
        }

        res.status(200).json({
            data: updatedWeather,
            success: true,
            message: `Request Made: ${req.method} from /api/weather endpoint.`
        });

    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const deleteWeatherById = async (req, res) => { // delete Weather by id func
    try {
        const { id } = req.params;
        const weather = await Weather.findByIdAndDelete(id);

        res.status(200).json({
            data: weather,
            success: true,
            message: `Request Made: ${req.method} from /api/weather endpoint.`,
            id
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = { // export all funcs
    getWeather,
    getAllWeather,
    getWeatherById,
    createWeather,
    updateWeatherById,
    deleteWeatherById
}
```

### **🎉⛃ Connected backend to frontend; now pulling data from _Atlas_ MongoDB. ⤸**

### ╰┈➤ **🌐 Live dev URL:** [https://hunterstevenshaw-weatherapp.netlify.app/](https://hunterstevenshaw-weatherapp.netlify.app/)

- Using Render _(https://render.com/)_ to host my Express/NodeJS app.
- Connected _backend_ to _frontend_. 
- Edited and saved _.env_ variables to make sure all data is secure and used correctly. 
- Changed and added error handling for _URL/endpoints_.
- Parsed data correctly and got back a formatted _JSON Response_.
- Used from _API_. **(External API > Atlas MongoDB database > Own API > Client)**
- Operation **_fullstack_** application w/ connections and hosting of both the _backend_ and _frontend_. 
- Gained **_+5,600xp_** and **_+2_** whole levels. I can now train to use the spell **_🔥 Pyroblast_**. 

![Image](https://github.com/user-attachments/assets/e76354ce-bfcf-4196-a00a-598da881fc8d)

![Image](https://github.com/user-attachments/assets/c80bc091-099e-4687-b782-e90dd35c8ab6)

### **🆕🌦️ Added _five day forecast_ data to API/database. ⤸**

**_server/app/weatherController.js_**

- `getForecastWeather` function.

```js
const getForecastWeather = async (req, res) => { // get forecast Weather func
    try {
        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: 'Api key is missing in env variables.',
                method: req.method,
            });
        }
        
        const lat = parseFloat(req.query.lat); // toFixed(4) no longer needed with $gte and $lte for the small differences 
        const lon = parseFloat(req.query.lon);

        console.log('Received Lat:', lat);
        console.log('Received Lon:', lon);

        // Ref: https://www.w3schools.com/mongodb/mongodb_query_operators.php
        const checkLocation = await WeatherForecast.findOne({ // check to see if this is a new location, if so, then we need to hit external api again
           "data.city.coord.lat": { $gte: lat - 0.0001, $lte: lat + 0.0001 }, // for small differences, wasn't saving in database 36.2872832 vs 36.2873
            "data.city.coord.lon": { $gte: lon - 0.0001, $lte: lon + 0.0001 },
        });

        console.log('Check Location Query:', {
            "data.coord.lat": lat,
            "data.coord.lon": lon,
        });

        console.log('checkLocation:', checkLocation); // see data from checkLocation

        if (checkLocation) {
            console.log('Data fetched from the database...');
            res.set('Cache-Control', 'no-store');

            return res.status(200).json({
                data: checkLocation.data,
                success: true,
                message: `Request Made: ${req.method} from /api/forecast/weather Request from database...`,
            });
        };

        console.log('New data fetched from external API...');
        
        const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
                lat,
                lon,
                appid: apiKey,
            },
        });

        // console.log('Weather API response:', weatherRes.data);
        const data = weatherRes.data;
        const newWeatherData = new WeatherForecast({
            data: data
        });

        console.log("saved data", newWeatherData);

        await newWeatherData.save(); // save to database

        res.set('Cache-Control', 'no-store');
        res.status(200).json({
            data: data,
            success: true,
            message: `Request Made: ${req.method} from /api/forecast/weather Request from external API...`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error fetching data.',
            method: req.method,
        });
    }
}
```

![Image](https://github.com/user-attachments/assets/1775aa6f-9598-45c8-972a-83ab9b68f273)

### **🎨🖌️🌦️ Added & Styled Nav Header Graphic. ⤸**

### ╰┈➤ **🤖📑 Reference:** [Reddit Post](https://www.reddit.com/r/identifythisfont/comments/1d80ljo/what_font_or_close_enough_font_is_weather/)

- _https://www.reddit.com/r/identifythisfont/comments/1d80ljo/what_font_or_close_enough_font_is_weather/_

<img src="https://github.com/user-attachments/assets/bd6a8c83-f84b-41e9-bcda-442ad26cf8a6" width="400px" />
<br><br>
<img src="https://github.com/user-attachments/assets/f7e4df2b-e0d8-4beb-b867-0ad5702bead8" width="400px" />
<br><br>
<img src="https://github.com/user-attachments/assets/0679219f-15e9-4abf-9ba5-875111957613" width="800px" />

### **💡📟 My Solutions/Code. ⤸**

**_client/App.scss_**
**_client/assets/fonts/_**

```scss
/* References >>> 
  1) https://fonts.google.com/
  2) https://www.w3schools.com/css/css3_fonts.asp
  3) https://www.reddit.com/r/identifythisfont/comments/1d80ljo/what_font_or_close_enough_font_is_weather/
  4) https://stackoverflow.com/questions/6382023/changing-the-color-of-an-hr-element
*/ 

// Fonts >>>
@font-face {
  font-family: fontWeather;
  src: url(assets/fonts/ClimateCrisis-Regular-VariableFont_YEAR.ttf);
  font-weight: bold;
}
@font-face {
  font-family: fontPaint;
  src: url(assets/fonts/FingerPaint-Regular.ttf);
  font-weight: bold;
}

/// Colors >>>
$primary-color: #f7f7f7;
$secondary-color: #232931;
$header-color: lightgray;
$text-color: whitesmoke;
$accent-color: #ec6e4c; 

nav {
  position: absolute;
  top: 0;
  right: 0;

  header {
    font-weight: bold;
    color: white;
    display: flex;
    flex-direction: column;
    background-color: #2b5cab;
    border-bottom-left-radius: 20px;

    #firstAlertContainer {
      display: flex;
      margin: 0;
      padding: 0;
      overflow-x: hidden;

      h1 {
        color: white;
        font-weight: bold;
        background-color: #2b5cab;
        font-family: fontWeather;
        font-size: 1rem;
      }
      span {
        position: absolute;
        font-size: 90px;
        top: -26px;
        right: 102.8px;
        text-decoration: none;
        z-index: 1;
      }
      #alertHeader {
        background-color: #ec6e4c;
        border-top-left-radius: 18px;
        transform: translateX(3px);
        
      }
    }
    hr {
      display: block;
      border: 0;
      border-top: 6px solid white;
      margin: 0;
      padding: 0;
      font-size: 1rem;
    }
    h2 {
      font-family: fontPaint;
      font-weight: bold;
      background-color: #232931;
      font-size: 1.0rem;
      text-align: center;
      padding: 10px;
      border-bottom-left-radius: 20px;
    }
  }
}
```

### **🎨🖌️🌦️ Updated frontend UI/UX. ⤸**

![Image](https://github.com/user-attachments/assets/e1635608-ac5e-4b6b-aeb0-86fa4f41ad5b)