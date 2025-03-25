import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

const Weather = () => {
    return (
        <>
            <CurrentWeather />
            <ForecastWeather />
        </>
    )
}

export default Weather;

/* REF:
    1) https://stackoverflow.com/questions/54596066/how-to-read-console-log-from-a-mounted-component-with-enzyme-and-jest-in-create
*/