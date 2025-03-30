import ForecastWeather from './ForecastWeather';

const Weather = () => {
    return (
        <main id="mainApp">
            <section className='ContentSection'>
                <ForecastWeather />
            </section>
        </main>
    )
}

export default Weather;

/* REF:
    1) https://stackoverflow.com/questions/54596066/how-to-read-console-log-from-a-mounted-component-with-enzyme-and-jest-in-create
*/