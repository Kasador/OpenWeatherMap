# 🗂 Overview to Weather App

[![Development Tools](https://skillicons.dev/icons?i=vscode,windows,apple,github)](https://skillicons.dev)

[![Development Status](https://api.netlify.com/api/v1/badges/6f73d827-fc3a-4e3c-9805-0f9b063a117a/deploy-status)](https://app.netlify.com/sites/hunterstevenshaw-weatherapp/deploys)

**🌐 [https://github.com/Kasador/OpenWeatherMap.git](https://github.com/Kasador/OpenWeatherMap.git)**

### 🔗🚧 **Development Server**: [https://hunterstevenshaw-weatherapp.netlify.app/](https://hunterstevenshaw-weatherapp.netlify.app/)

## 🖥️ The Weather App

Repository made to create/develop a small weather app. Using the **_OpenWeatherMap API_**, I will develop a the weather app using the MERN tech stack connecting the data to my API and then from there, storing the data into MongoDB. This app is built using _**npm create vite@latest**_ for the frontend. The new tech stack is designed for simplicity, performance, and ease of content management for future development and maintenance.

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

- **Netlify**: For frontend development, testing on _live_ server.

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

**server/app/controller/weatherController.js**

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

![Image](https://github.com/user-attachments/assets/aade7f7e-256e-43bf-a343-8ac275e22c80)