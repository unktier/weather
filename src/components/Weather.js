import React from 'react';
import WeatherIcon from './WeatherIcon/WeatherIcon';
import TimePoint from './TimePoint';
import useWeather from '../hooks/useWeather';

import './Weather.css';

const Weather = ({ weatherData, changeDay, startTime }) => {
    const renderWeatherData = weatherData[changeDay].map((data, i) => {
        return (
            <div key={data.timepoint} className="weather-day">
                <div className="weather-type">
                    <WeatherIcon
                        className="weather-icon"
                        weatherType={data.weather}
                    />
                </div>
                <div className="timepoint">
                    <TimePoint 
                        index={i}
                        startTime={startTime}
                    />
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

    const slide = `slide-${changeDay}`;
    
    return (
        <div className={`weather ${slide}`}>
            {renderWeatherData}
        </div>
    )
};

export default Weather;