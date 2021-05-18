import React, { useState, useEffect } from 'react';
import useWeather from '../hooks/useWeather';
import Weather from './Weather';
import Day from './Day';
import Location from './Location';
import './WeatherCarousel.css';

const WeatherCarousel = () => {
    const [changeDay, setChangeDay] = useState(0);
    const [weatherData, startTime, startDisplay] = useWeather();
    const [weatherHover, setWeatherHover] = useState(false);
    const [windIndex, setWindIndex] = useState(0);

    const onWeatherHover = (index) => {
        setWeatherHover(true);
        setWindIndex(index);
    };

    const onWeatherLeave = (event) => {
        setWeatherHover(false);
    };

    const onChangeDayNext = () => {
        if (changeDay < 8) {
            setChangeDay(changeDay + 1);
        };
    };

    const onChangeDayPrev = () => {
        if (changeDay > 0) {
            setChangeDay(changeDay - 1);
        };
    };

    const renderWeather = () => {
        if (weatherData) {
            return (
                <Weather
                    weatherData={weatherData}
                    startTime={startTime}
                    firstRender={startDisplay}
                    changeDay={changeDay}
                    onWeatherHover={onWeatherHover}
                    onWeatherLeave={onWeatherLeave}
                    isWeatherHover={weatherHover}
                    windIndexCheck={windIndex}
                />
            );
        };
        return <div>Loading</div>
    };

    return (
        <div 
            className="weather-carousel"
        >
            <div className="initial-date">
                <Day changeDay={changeDay} />
            </div>
            <div className="location">
                <Location />
            </div>
            {
                changeDay > 0 ? 
                    <button
                        onClick={onChangeDayPrev}
                        className="change-prev"
                    >
                        &#8249;
                    </button>
                :   <div
                        className="empty-button-left"
                    >
                    </div>
            }
            {renderWeather()}
            {
                    changeDay < 8 && weatherData ? <button
                        onClick={onChangeDayNext}
                        className="change-next"
                    >
                    &#8250;
                    </button>
                :   <div
                        className="empty-button-right"
                    >    
                    </div>
            }
        </div>
    );
};

export default WeatherCarousel;