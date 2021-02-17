import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayWeather = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);                
            },
            err => {
                console.log(err.message);
            }
        );

        const getLocation = async () => {
            const response = await axios.get('http://www.7timer.info/bin/api.pl', {
                params: {
                    lon: longitude,
                    lat: latitude,
                    product: 'civil',
                    output: 'json'
                }
            });
            console.log(response);
        };
        getLocation();

    }, [latitude, longitude]);


    return (
        <div className="display-weather">
            DisplayWeather
        </div>
    );
};

export default DisplayWeather;