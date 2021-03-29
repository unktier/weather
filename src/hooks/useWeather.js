import { useState, useEffect } from 'react';

const useWeather = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

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

    }, [longitude, latitude]);

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
};

const chunkData = (data) => {
    const addToIndex = 8 - startDisplay;

    const chunkedData = data.reduce((accumulator, item, index) => {
         const chunkIndex = Math.floor((index + addToIndex) / 8);

        if (!accumulator[chunkIndex]) {
            accumulator[chunkIndex] = []; // Begin new chunk
        };

        accumulator[chunkIndex] = [...accumulator[chunkIndex], item];

        return accumulator;
    }, []);

    setWeatherData(chunkedData)

};

export default useWeather;