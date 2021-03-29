import React, { useEffect, useState } from 'react';
import useWeather from '../hooks/useWeather';
import { KEY } from '../api/config';
import axios from 'axios';
import './Location.css';

const Location = () => {
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [weatherData, latitude, longitude] = useWeather();

    useEffect(() => {
        const getLocation = async (latLong) => {
            const { data: { results: { 0: { components } } } } = await axios.get('https://api.opencagedata.com/geocode/v1', {
                params: {
                    key: KEY,
                    format: 'json',
                    q: latLong
                }
            });

            components.city ? setCity(components.city) : setCity(components.county);
            setCountry(components.country);

        };
        
        if (latitude && longitude) {
            const paramData = `${latitude.toFixed(6)},${longitude.toFixed(6)}`;
            getLocation(paramData);
        };

    }, [latitude, longitude]);


    return (
        <div className="location-city-country">
            {`${city}, ${country}`}
        </div>
    );
};

export default Location;