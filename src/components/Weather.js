import React from 'react';
import WeatherIcon from './WeatherIcon/WeatherIcon';

import './Weather.css';

const Weather = ({ weatherData, changeDay }) => {

    const renderWeatherData = () => {
        if (weatherData) {
            return weatherData[changeDay].map(data => {
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