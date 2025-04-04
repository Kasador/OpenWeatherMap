import { useEffect, useState } from "react";
import { getCurrentWeather} from '../services/weatherService';
import WeatherIcons from "../utils/WeatherIcons";
import WeatherConversions from "../utils/WeatherConversions";
import * as Icons from "weather-icons-react";

/* REF:
    1) https://stackoverflow.com/questions/54596066/how-to-read-console-log-from-a-mounted-component-with-enzyme-and-jest-in-create
    2) https://stackoverflow.com/questions/72064944/how-to-display-a-specific-component-icon-based-off-of-props-data-using-a-switch
    3) https://stackoverflow.com/questions/74534591/react-how-to-display-react-icons-element-using-fetch-api
    4) https://stackoverflow.com/questions/65576629/how-to-render-react-icon-depending-on-string-from-database <<<SOLUTION>>>
    5) https://react.dev/reference/react/useEffect
*/

const CurrentWeather = () => {
    const [ weather, setWeather ] = useState(null); // store data in state managnment
    const [ loading, setLoading ] = useState(true); // have it loading until we have data, then false
    const [ error, setError ] = useState(null); // for error messages
    const [ weatherIconCode, setWeatherIconCode] = useState(null);
    
    useEffect(() => { // use effect to run this first
        const fetchWeatherData = async () => { // if we are fetching from API we need async to wait for data 
            try { // fetch and store weather data
                const fetchData = await getCurrentWeather(); // now run my function from the services 
                setWeather(fetchData); // store data into my weather state mana
                setWeatherIconCode(fetchData.data.weather[0].icon);
           
            } catch (error) { // store error message
                setError(error);
            } finally { // no longer loading
                setLoading(false);
            }
        };
        
        fetchWeatherData(); // try and fetch the weather data w/ error handling
    }, []); // this runs once the component mounts

    const DynamicWeatherIcon  = ({ name }) => {
        name = WeatherIcons(weatherIconCode);
        
        const IconComponent = Icons[name];
        if (!IconComponent) {
            return <Icons.WiAlien />
        }

        return <IconComponent />
    };

    if (loading) return <div>Loading... Please Wait.</div>
    if (error) return <div>Oh no! There was an error: {error.message}</div>

    return (
        <>
            <div>
                <h1>{weather.data.name}</h1>
                <section>
                    {/* <img src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt="weather icon" /> */}
                    <DynamicWeatherIcon  />
                    <h2>{weather.data.weather[0].description}</h2>
                </section>
                    {/* <p><strong>Temperature:</strong> {Math.round((weather.data.main.temp - 273.15) * 1.8 +32)}&#8457;</p> */}
                    <p><strong>Temperature:</strong> {WeatherConversions(weather.data.main.temp)}&#8457;</p> {/* added conversion func */}
                    <p><strong>Feels Like:</strong> {Math.round((weather.data.main.feels_like - 273.15) * 1.8 +32)}&#8457;</p>
                    <p><strong>Wind Speed:</strong> {Math.round(weather.data.wind.speed * 2.2369)} mph</p>
                    <p><strong>Humidity:</strong> {weather.data.main.humidity}%</p>
            </div>
        </>
    )
}

export default CurrentWeather;