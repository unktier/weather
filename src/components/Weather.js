import React from 'react';
import WeatherIcon from './WeatherIcon/WeatherIcon';

import './Weather.css';

const Weather = ({ weatherData, changeDay, slideDirection }) => {
    const renderWeatherData = weatherData[changeDay].map(data => {
        return (
            <div key={data.timepoint} className="weather-day">
                <div className="weather-type">
                    <WeatherIcon
                        className="weather-icon"
                        weatherType={data.weather}
                    />
                </div>
                <div className="timepoint">
                    {/* {data.timepoint} */}
                </div>
                <div className="cloud-cover">
                    {/* {data.cloudcover} */}
                </div>
                <div className="temp">
                    {`Temp: ${data.temp2m} °C`}
                </div>
                <div className="relative-humidity">
                    {`Humidity: ${data.rh2m}`}
                </div>
            </div>
        );             
    });
    console.log(slideDirection)
    return (
        <div className="weather">
            {renderWeatherData}
        </div>
    )
};

export default Weather;