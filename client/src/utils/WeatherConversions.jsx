const WeatherConversions = (temp) => {
    // K to F temp
    const calculation = Math.round((temp - 273.15) * 1.8 +32);
    return calculation;
}

export default WeatherConversions;