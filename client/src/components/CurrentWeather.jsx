import { useEffect, useState } from "react";
import { getCurrentWeather} from '../services/weatherService';

const CurrentWeather = () => {
    const [ weather, setWeather ] = useState(null); // store data in state managnment
    const [ loading, setLoading ] = useState(true); // have it loading until we have data, then false
    const [ error, setError ] = useState(null); // for error messages
    
    useEffect(() => { // use effect to run this first
        const fetchWeatherData = async () => { // if we are fetching from API we need async to wait for data 
            try { // fetch and store weather data
                const fetchData = await getCurrentWeather(); // now run my function from the services 
                setWeather(fetchData); // store data into my weather state mana
            } catch (error) { // store error message
                setError(error);
            } finally { // no longer loading
                setLoading(false);
            }
        };

        fetchWeatherData(); // try and fetch the weather data w/ error handling
    }, []); // this runs once the component mounts

    // console.log(wrapper.debug('debugg console.log', weather));
    // console.log('normal console.log', weather);

    if (loading) return <div>Loading... Please Wait.</div>
    if (error) return <div>Oh no! There was an error: {error.message}</div>

    return (
        <>
            <div>
                <h1>Weather in... <br></br><span>{weather.data.name}</span></h1>
                <section>
                    <img src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt="weather icon" />
                    <p>{weather.data.weather[0].description}</p>
                </section>
                    <p><strong>Temperature:</strong> {Math.round((weather.data.main.temp - 273.15) * 1.8 +32)}&#8457;</p>
                    <p><strong>Feels Like:</strong> {Math.round((weather.data.main.feels_like - 273.15) * 1.8 +32)}&#8457;</p>
                    <p><strong>Wind Speed:</strong> {Math.round(weather.data.wind.speed * 2.2369)} mph</p>
                    <p><strong>Humidity:</strong> {weather.data.main.humidity}%</p>
            </div>
        </>
    )
}

export default CurrentWeather;

/* REF:
    1) https://stackoverflow.com/questions/54596066/how-to-read-console-log-from-a-mounted-component-with-enzyme-and-jest-in-create
*/