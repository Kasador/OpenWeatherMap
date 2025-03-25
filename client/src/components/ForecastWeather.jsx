import { useEffect, useState } from "react";
import { getForecastWeather } from '../services/weatherService';

const ForecastWeather = () => {
    const [ weather, setWeather ] = useState(null); // store data in state managnment
    const [ loading, setLoading ] = useState(true); // have it loading until we have data, then false
    const [ error, setError ] = useState(null); // for error messages
    
    useEffect(() => { // use effect to run this first
        const fetchWeatherData = async () => { // if we are fetching from API we need async to wait for data 
            try { // fetch and store weather data
                const fetchData = await getForecastWeather(); // now run my function from the services 
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
    if (error) return <div>Oh no! There was an error: {error}</div>

    return (
        <>
            <div>
                <h1>Five Day Forecast in... <br></br><span>{weather.data.city.name}</span></h1>
                <ol>
                    {weather.data.list.map((item, index) => (
                        <li key={index}>
                            <p>{item.dt_txt}</p>
                            <p>{Math.round((item.main.temp - 273.15) * 1.8 +32)}&#8457;</p>
                            <p>{item.weather[0].description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default ForecastWeather;

/* REF:
    1) https://stackoverflow.com/questions/54596066/how-to-read-console-log-from-a-mounted-component-with-enzyme-and-jest-in-create
*/