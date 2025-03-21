import { useEffect, useState } from "react";
import getWeatherData from '../services/weatherService';

const Weather = () => {
    const [ weather, setWeather ] = useState(null); // store data in state managnment
    const [ loading, setLoading ] = useState(true); // have it loading until we have data, then false
    const [ error, setError ] = useState(null); // for error messages
    
    useEffect(() => { // use effect to run this first
        const fetchWeatherData = async () => { // if we are fetching from API we need async to wait for data 
            try { // fetch and store weather data
                const fetchData = await getWeatherData(); // now run my function from the services 
                setWeather(fetchData.data); // store data into my weather state mana
            } catch (error) { // store error message
                setError(error);
            } finally { // no longer loading
                setLoading(false);
            }
        };

        fetchWeatherData(); // try and fetch the weather data w/ error handling
    }, []); // this runs once the component mounts

    // console.log(wrapper.debug('debugg console.log', weather));
    console.log('normal console.log', weather);

    if (loading) return <div>Loading... Please Wait.</div>
    if (error) return <div>Oh no! There was an error: {error}</div>

    return (
        <>
            <h1>Weather Data Testing:</h1>
            <div>
            <h1>Weather in {weather.name}</h1>
            <p>Temperature: {weather.main.temp} K</p>
            <p>Condition: {weather.weather[0].description}</p>
            <p>Feels Like: {weather.main.feels_like} K</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
            <p>Humidity: {weather.main.humidity}%</p>
        </div>
        </>
    )
}

export default Weather;

/* REF:
    1) https://stackoverflow.com/questions/54596066/how-to-read-console-log-from-a-mounted-component-with-enzyme-and-jest-in-create
*/