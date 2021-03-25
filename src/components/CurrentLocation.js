import React, { useEffect } from 'react';
import { KEY } from '../api/geocode';
import axios from 'axios';

const CurrentLocation = ({ long, lat }) => {
    useEffect(() => {
        const getLocation = async (latLong) => {
            const data = await axios.get('https://api.opencagedata.com/geocode/v1', {
                params: {
                    key: KEY,
                    format: 'json',
                    q: latLong
                }
            });
            console.log(data);
        };
        if (long && lat) {
            const paramData = `${lat.toFixed(6)},${long.toFixed(6)}`;
            getLocation(paramData);
        };

    }, [long, lat]);

    return (
        <div className="current-location">
            CurrentLocation
        </div>
    );
};

export default CurrentLocation;