import axios from 'axios';

const getWeatherData = async () => {
    if (!navigator.geolocation) { // getting users location not supported by browser
        alert("Geolocation is not supported by your browser. Please use a different browser.");
        return;
    }

    try { // fetch data from my api
        const data = await new Promise((resolve, reject) => { // this was needed to get the lat and lon data before hiting backend
            navigator.geolocation.getCurrentPosition(async (pos) => { // wait get users location, ask permissions, then use to hit api.
                    const lat = pos.coords.latitude;
                    const lon = pos.coords.longitude;
    
                    const getWeather = `http://localhost:3000/api/geo-data?lat=${lat}&lon=${lon}` || `https://hunterstevenshaw-weatherapp.netlify.app/api/geo-data?lat=${lat}&lon=${lon}`;
    
                    try {
                        const res = await axios.get(getWeather);
                        console.log('Weather Data: ', res.data);
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

export default getWeatherData;

/* REF:
    1) https://axios-http.com/docs/
    2) https://axios-http.com/docs/handling_errors
    3) https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
*/