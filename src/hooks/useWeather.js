import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeather = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [startDisplay, setStartDisplay] = useState(0);

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
        if (latitude && longitude) {
            getWeatherData();
        };

    }, [latitude, longitude, startDisplay]);

    const displayFirstDay = (currentHour) => {
        /*
           time reference
           00 = 02:00
           06 = 08:00
           12 = 14:00
           18 = 20:00
       */
    
       if (currentHour === 2) {
           setStartDisplay(7);
       } else if (currentHour === 8) {
           setStartDisplay(5);
       } else if (currentHour === 14) {
           setStartDisplay(3)
       } else if (currentHour === 20) {
           setStartDisplay(1);
       };
    };
    
    const onInitTime = (initDate) => {
       const year = initDate.slice(0, 4);
       const month = initDate.slice(4, 6);
       const day = initDate.slice(6, 8);
       const ztime = initDate.slice(8, 10);
       const currentDate = `${year}-${month}-${day}T${ztime}:00:00Z`;
       const initTime = new Date(currentDate);
       const currentHour = initTime.getHours();
       displayFirstDay(currentHour);
    };
    
    const chunkData = (data) => {
        const addToIndex = 8 - startDisplay;
    
        const chunkedData = data.reduce((acc, item, index) => {
             const chunkIndex = Math.floor((index + addToIndex) / 8);
    
            if (!acc[chunkIndex]) {
                acc[chunkIndex] = []; // Begin new chunk
            };
    
            acc[chunkIndex] = [...acc[chunkIndex], item];
    
            return acc;
        }, []);
    
        setWeatherData(chunkedData)
    
    };

    const getWeatherData = async () => {
        const { data } = await axios.get('http://www.7timer.info/bin/api.pl', {
            params: {
                lon: longitude,
                lat: latitude,
                product: 'civil',
                output: 'json'
            }
        });

        if (startDisplay) {
            chunkData(data.dataseries);
        };

        onInitTime(data.init);

    };

    return [weatherData, latitude, longitude]
};

export default useWeather;