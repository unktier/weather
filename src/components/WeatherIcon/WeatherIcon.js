import React from 'react';
import Day from './day.svg';

const WeatherIcon = () => {
    return (
        <div className="weather-icon">
            <img src={Day} alt="day" />
        </div>
    );
};

export default WeatherIcon;