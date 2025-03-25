import axios from 'axios';
// require('dotenv').config();

const getCurrentWeather = async () => {
    if (!navigator.geolocation) { // getting users location not supported by browser
        alert("Geolocation is not supported by your browser. Please use a different browser.");
        return;
    }

    try { // fetch data from my api
        const data = await new Promise((resolve, reject) => { // this was needed to get the lat and lon data before hiting backend
            navigator.geolocation.getCurrentPosition(async (pos) => { // wait get users location, ask permissions, then use to hit api.
                    const lat = pos.coords.latitude;
                    const lon = pos.coords.longitude;
    
                    let getWeather;
                    // Ref: https://vite.dev/guide/env-and-mode >>> How to import env variables in vite, dotenv no longer needed
                    if (import.meta.env.VITE_NODE_ENV === 'production') { // check to see if the app is on localhost or live dev server
                        getWeather = `${import.meta.env.VITE_PRODUCTION_URL}current/weather?lat=${lat}&lon=${lon}`; // so dumb, changed my production url to be my backend, not frontend. Haha.
                    } else {
                        getWeather = `${import.meta.env.VITE_DEVELOPMENT_URL}current/weather?lat=${lat}&lon=${lon}`;
                    }
                    try {
                        const res = await axios.get(getWeather);
                        console.log('CurrentWeather Data: ', res.data);
                        resolve(res.data);
                    } catch (error) {
                        reject('Error fetching weather data...');
                    }
                }, 
                (error) => {
                    reject('Error fetching weather data...', error);
            });
        });

        return data;
        
    } catch (error) {
        console.error('Oh no! Something went wrong: ', error);
        alert('No location found!');
        // throw error;
    }
};

const getForecastWeather = async () => {
    if (!navigator.geolocation) { // getting users location not supported by browser
        alert("Geolocation is not supported by your browser. Please use a different browser.");
        return;
    }

    try { // fetch data from my api
        const data = await new Promise((resolve, reject) => { // this was needed to get the lat and lon data before hiting backend
            navigator.geolocation.getCurrentPosition(async (pos) => { // wait get users location, ask permissions, then use to hit api.
                    const lat = pos.coords.latitude;
                    const lon = pos.coords.longitude;
    
                    let getWeather;
                    // Ref: https://vite.dev/guide/env-and-mode >>> How to import env variables in vite, dotenv no longer needed
                    if (import.meta.env.VITE_NODE_ENV === 'production') { // check to see if the app is on localhost or live dev server
                        getWeather = `${import.meta.env.VITE_PRODUCTION_URL}forecast/weather?lat=${lat}&lon=${lon}`; // so dumb, changed my production url to be my backend, not frontend. Haha.
                    } else {
                        getWeather = `${import.meta.env.VITE_DEVELOPMENT_URL}forecast/weather?lat=${lat}&lon=${lon}`;
                    }
                    try {
                        const res = await axios.get(getWeather);
                        console.log('ForecastWeather Data: ', res.data);
                        resolve(res.data);
                    } catch (error) {
                        reject('Error fetching weather data...');
                    }
                }, 
                (error) => {
                    reject('Error fetching weather data...', error);
            });
        });

        return data;
        
    } catch (error) {
        console.error('Oh no! Something went wrong: ', error);
        alert('No location found!');
        // throw error;
    }
};

export { getCurrentWeather, getForecastWeather };

/* REF:
    1) https://axios-http.com/docs/
    2) https://axios-http.com/docs/handling_errors
    3) https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
    4) https://stackoverflow.com/questions/33178843/es6-export-default-with-multiple-functions-referring-to-each-other >>> Export multiple funcs
*/