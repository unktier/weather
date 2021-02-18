import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayWeather.css';

const DisplayWeather = () => {
    // const [latitude, setLatitude] = useState(null);
    // const [longitude, setLongitude] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        // window.navigator.geolocation.getCurrentPosition(
        //     position => {
        //         setLatitude(position.coords.latitude);
        //         setLongitude(position.coords.longitude);                
        //     },
        //     err => {
        //         console.log(err.message);
        //     }
        // );

        const getLocation = async () => {
            const response = await axios.get('http://www.7timer.info/bin/api.pl', {
                params: {
                    lon: 113.17,
                    lat: 23.09,
                    product: 'civil',
                    output: 'json',
                }
            });
            setWeatherData(response);
        };
        getLocation();
    }, []);

    const renderWeatherData = () => {
        if (weatherData) {
            return weatherData.data.dataseries.map(data => {
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
                            {data.weather}
                        </div>
                    </div>
                );
            });
        } ;

        return <div>Loading</div>
    };



    console.log(weatherData);

    return (
        <div className="display-weather">
            <div className="initial-date">
                {weatherData ? weatherData.data.init : 'Loading'}
            </div>
            <div className="weather-container">
                {renderWeatherData()}
            </div>
        </div>
    );
};

export default DisplayWeather;