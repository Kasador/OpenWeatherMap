import axios from 'axios';

const getWeatherData = async () => {
    if (!navigator.geolocation) { // getting users location not supported by browser
        alert("Geolocation is not supported by your browser. Please use a different browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(async (pos) => { // wait get users location, ask permissions, then use to hit api.
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
    });

    try { // fetch data from my api
        const res = await axios.get(`https://hunterstevenshaw-weatherapp.netlify.app/api/geo-data?lat=${lat}&lon=${lon}`);

        if (res.status !== 200) { // if not success
            throw new Error('Error getting weather data.');
        }

        const data = res.data;
        console.log(data);

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