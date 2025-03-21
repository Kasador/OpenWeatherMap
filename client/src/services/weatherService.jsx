import axios from 'axios';

const getWeatherData = async () => {
    // const storeWeatherData = localStorage.getItem('weatherData'); // check to see if we have data in localStorage

    // if (storeWeatherData) {
    //     return JSON.parse(storeWeatherData); // parse the data to JSON and return it. PRO TIP: add return to not run anything else below
    // }
    // https://axios-http.com/docs/handling_errors
    try { // fetch data from my api
        const res = await axios.get('http://localhost:3000/api/geo-data?lat=36.1699&lon=-115.1398');

        if (res.status !== 200) { // if not success
            throw new Error('Error getting weather data.');
        }

        const data = res.data;
        console.log(data);

        return data;
    } catch (error) {
        console.error('Oh no! Something went wrong: ', error);
        throw error;
    }
};

export default getWeatherData;