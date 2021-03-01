import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon/WeatherIcon';

import './Weather.css';

const Weather = (props) => {

    const renderWeatherData = () => {
        if (props.weatherData) {
            return props.weatherData[props.changeDay].map((data, i) => {
                return (
                    <div key={data.timepoint} className="weather-day">
                        <div className="timepoint">
                            {data.timepoint}
                        </div>
                        <div className="cloud-cover">
                            {data.cloudcover}
                        </div>
                        <div className="temp">
                            {data.temp2m}
                        </div>
                        <div className="relative-humidity">
                            {data.rh2m}
                        </div>
                        <div className="weather-type">
                            <WeatherIcon 
                                weatherType={data.weather}
                            />
                        </div>
                    </div>
                );             
            });
        };
        return <div>Loading</div>

    };

    return (
        <div className="weather">
            {renderWeatherData()}
        </div>
    )
};

export default Weather;