import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon/WeatherIcon';
import TimePoint from './TimePoint';
import Wind from './Wind';

import './Weather.css';

const Weather = ({ weatherData, changeDay, startTime, firstRender }) => {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [weatherHover, setWeatherHover] = useState(false);
    const [wind, setWind] = useState({});

    const currentCursorPos = (event) => {
        setPosX(event.clientX);
        setPosY(event.clientY);
    };

    const onWeatherHover = (windData) => {
        setWeatherHover(true);
    }

    const onWeatherLeave = (event) => {
        setWeatherHover(false);
    };


    const renderWeatherData = weatherData[changeDay].map((data, i) => {
        return (
            <div
                key={data.timepoint} 
                className="weather-day"
                onMouseMove={currentCursorPos}
                onMouseEnter={onWeatherHover}
                onMouseLeave={onWeatherLeave}
            >
                <Wind
                    posX={posX}
                    posY={posY}
                    isWeatherHover={weatherHover}
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
        <div className={`weather ${slide}`}>
            {renderWeatherData}
        </div>
    )
};

export default Weather;