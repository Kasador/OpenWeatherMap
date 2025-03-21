import axios from 'axios';

const getWeatherData = async () => {
    if (!navigator.geolocation) { // getting users location not supported by browser
        alert("Geolocation is not supported by your browser. Please use a different browser.");
        return;
    }

    try { // fetch data from my api
        navigator.geolocation.getCurrentPosition(async (pos) => { // wait get users location, ask permissions, then use to hit api.
            const { lat, lon } = pos.coords;

            const latitude = lat.latitude;
            const longitude = lon.longitude;

            const getWeather = `http://localhost:3000/api/geo-data?lat=${latitude}&lon=${longitude}` || `https://hunterstevenshaw-weatherapp.netlify.app/api/geo-data?lat=${latitude}&longitude=${lon}`;
            const res = await axios.get(getWeather);

            if (res.status !== 200 || !res.data.data) { // if not success
                throw new Error('Error getting weather data.');
            }

            const data = res.data.data;
            console.log(data);

            return data;
        }, (error) => {
            console.error('Location error: ', error);
            alert('Error getting your location.');
        });
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