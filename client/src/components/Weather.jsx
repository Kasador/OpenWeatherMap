import { useEffect, useState } from "react";
import getWeatherData from '../services/weatherService';

const Weather = () => {
    const [ weather, setWeather ] = useState(null); // store data in state managnment
    const [ loading, setLoading ] = useState(true); // have it loading until we have data, then false
    const [ error, setError ] = useState(null); // for error messages
    
    useEffect(() => { // use effect to run this first
        const fetchWeatherData = async () => { // if we are fetching from API we need async to wait for data 
            try { // fetch and store weather data
                const data = await getWeatherData(); // now run my function from the services 
                setWeather(data); // store data into my weather state mana
            } catch (error) { // store error message
                setError(error);
            } finally { // no longer loading
                setLoading(false);
            }
        };

        fetchWeatherData(); // try and fetch the weather data w/ error handling
    }, []); // this runs once the component mounts

    console.log(weather, 'data');

    if (loading) return <div>Loading... Please Wait.</div>
    if (error) return <div>Oh no! There was an error: {error}</div>

    return (
        <>
            <h1>Weather Data Testing:</h1>
            <div>
            <h1>Weather in {weather.data.name}</h1>
            <p>Temperature: {weather.data.main.temp} K</p>
            <p>Condition: {weather.data.weather[0].description}</p>
            <p>Feels Like: {weather.data.main.feels_like} K</p>
            <p>Wind Speed: {weather.data.wind.speed} m/s</p>
            <p>Humidity: {weather.data.main.humidity}%</p>
        </div>
        </>
    )
}

export default Weather;