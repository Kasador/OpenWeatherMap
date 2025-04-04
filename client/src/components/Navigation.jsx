import CurrentWeather from './CurrentWeather';

const Navigation = () => {
    return (
        <nav>
            <header>
                <div id="firstAlertContainer">
                    <h1>F1RST </h1>
                    <span>/</span>
                    <h1 id='alertHeader'>ALERT</h1>
                </div>
                <hr></hr>
                <h2>WEATHER</h2>
            </header>
            <section id="currentWeather">
                <CurrentWeather />
            </section>
        </nav>
    )
}

export default Navigation;