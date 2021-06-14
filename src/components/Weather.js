import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon/WeatherIcon';
import TimePoint from './TimePoint';
import WeatherDetails from './WeatherDetails';

import './Weather.css';

const Weather = ({ weatherData, changeDay, startTime, firstRender, onWeatherHover, onWeatherLeave, isWeatherHover, windIndexCheck }) => {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    const findCursorPos = (event) => {
        setPosX(event.clientX);
        setPosY(event.clientY);
    };

    const renderWeatherData = weatherData[changeDay].map((data, i) => {
        return (
            <div
                key={data.timepoint} 
                className="weather-day"
                onMouseEnter={() => onWeatherHover(i)}
            >
                <WeatherDetails
                    posX={posX}
                    posY={posY}
                    isWeatherHover={isWeatherHover}
                    wind10m={data.wind10m}
                    cloudCover={data.cloudcover}
                    windIndex={i}
                    windIndexCheck={windIndexCheck}
                />
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
            className={`weather ${slide}`}
            onMouseLeave={onWeatherLeave}
        >
            {renderWeatherData}
        </div>
    )
};

export default Weather;