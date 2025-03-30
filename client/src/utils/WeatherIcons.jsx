const WeatherIcons = (name) => {
    switch (name) {
        case "01d": // 01 - clear sky - day
            name = 'WiDaySunny';
            break;
        case "01n": // 01 - night
            name = 'WiNightClear';
            break;
        case "02d": // 02 - few clouds - day
            name = 'WiDayCloudy';
            break;
        case "02n": // 02 - night
            name = 'WiNightAltCloudy';
            break;
        case "03d": // 03 - scattered clouds - day
            name = 'WiCloud';
            break;
        case "03n": // 03 - night
            name = 'WiCloud';
            break;
        case "04d": // 04 - broken clouds - day
            name = 'WiCloudy';
            break;
        case "04n": // 04 - night
            name = 'WiCloudy';
            break;
        case "09d": // 09 - shower rain - day
            name = 'WiDayShowers';
            break;
        case "09n": // 09 - night
            name = 'WiNightAltShowers';
            break;
        case "10d": // 10 - rain - day
            name = 'WiDayRain';
            break;
        case "10n": // 10 - night
            name = 'WiNightAltRain';
            break;
        case "11d": // 11 - thunderstorm - day
            name = 'WiThunderstorm';
            break;
        case "11n": // 11 - night
            name = 'WiThunderstorm';
            break;
        case "13d": // 13 - snow - day
            name = 'WiSnowflakeCold';
            break;
        case "13n": // 13 - night
            name = 'WiSnowflakeCold';
            break;
        case "50d": // 50 - mist - day
            name = 'WiDayFog';
            break;
        case "50n": // 50 - night
            name = 'WiNightFog';
            break;
        default:
            name = "WiThermometer";
            break;
    }       

    return name;
}

export default WeatherIcons;