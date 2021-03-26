import React, { useEffect, useState } from 'react';
import { KEY } from '../api/config';
import axios from 'axios';
import './CurrentLocation.css';

const CurrentLocation = ({ long, lat }) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const getLocation = async (latLong) => {
            const { data: { results: { 0: { components } } } } = await axios.get('https://api.opencagedata.com/geocode/v1', {
                params: {
                    key: KEY,
                    format: 'json',
                    q: latLong
                }
            });
            console.log(components);
            setLocation(components.city);
        };
        if (long && lat) {
            const paramData = `${lat.toFixed(6)},${long.toFixed(6)}`;
            getLocation(paramData);
        };

    }, [long, lat]);

    return (
        <div className="current-location">
            {location}
        </div>
    );
};

export default CurrentLocation;