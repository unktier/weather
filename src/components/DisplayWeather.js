import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const DisplayWeather = () => {
    // const [latitude, setLatitude] = useState(null);
    // const [longitude, setLongitude] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [changedWeatherData, setChangedWeatherData] = useState([]);

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
                    output: 'json'
                }
            });
            setWeatherData(response);
        };

        getLocation();

    }, []);

    // split array into 8 pieces
    const createWeatherObj = () => {
        const newArray = [...weatherData.data.dataseries];
        let updateArray = [];
        let sliceTo = 8;

        for (let i = 0; i < newArray.length; i++) {
            if (i % 8 === 0 || i === 0) {
                updateArray = [...updateArray, newArray.slice(i, sliceTo)];
                sliceTo += 8;
            };
        };
        setChangedWeatherData(updateArray);

    };

    if (changedWeatherData.length !== 8 && weatherData) {
        createWeatherObj();
    };

    console.log(changedWeatherData);

    return (
        <div className="display-weather">
            <div className="initial-date">
                {weatherData ? weatherData.data.init : 'Loading'}
            </div>
            <Weather 
                weatherData={weatherData} 
            />
        </div>
    );
};

export default DisplayWeather;