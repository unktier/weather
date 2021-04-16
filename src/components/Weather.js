import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon/WeatherIcon';
import TimePoint from './TimePoint';

import './Weather.css';

const Weather = ({ weatherData, changeDay, startTime, firstRender, onWeatherHover, onWeatherLeave, findCursorPos }) => {
    const renderWeatherData = weatherData[changeDay].map((data, i) => {
        return (
            <div
                key={data.timepoint} 
                className="weather-day"
            >
                <TimePoint 
                    index={i}
                    startTime={startTime}
                    timePoint={data.timepoint}
                    firstRender={firstRender}
                />
                <div className="weather-type">
                    <WeatherIcon
                        className="weather-icon"
                        weatherType={data.weather}
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
        <div
            onMouseMove={findCursorPos}
            onMouseEnter={onWeatherHover}
            className={`weather ${slide}`}
        >
            {renderWeatherData}
        </div>
    )
};

export default Weather;