import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const DisplayWeather = () => {
    // const [latitude, setLatitude] = useState(null);
    // const [longitude, setLongitude] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [initDate, setInitDate] = useState(null);
    const [changeDay, setChangeDay] = useState(0);

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

        // lon: 113.17,
        // lat: 23.09,

        const getLocation = async () => {
            const { data } = await axios.get('http://www.7timer.info/bin/api.pl', {
                params: {
                    lon: 113.17,
                    lat: 23.09,
                    product: 'civil',
                    output: 'json'
                }
            });
            console.log(data)
            // splitting data into 8x8 until I find a better solution

            const newArray = [...data.dataseries];
            let updateArray = [];
            let sliceTo = 8;
    
            for (let i = 0; i < newArray.length; i++) {
                if (i % 8 === 0 || i === 0) {
                    updateArray = [...updateArray, newArray.slice(i, sliceTo)];
                    sliceTo += 8;
                };
            };
            setInitDate(data.init)
            setWeatherData(updateArray);
        };

        getLocation();

    }, []);

    // console.log(weatherData)

    const onChangeDayNext = () => {
        if (changeDay < 7) {
            setChangeDay(changeDay + 1);
        };
    };

    const onChangeDayPrev = () => {
        if (changeDay > 0) {
            setChangeDay(changeDay - 1);
        };
    };

    return (
        <div className="display-weather">
            <div className="initial-date">
                { initDate ? initDate : 'Loading'}
            </div>
            <Weather 
                weatherData={weatherData}
                changeDay={changeDay}
            />
            {
                changeDay > 0 ? 
                    <button
                        onClick={onChangeDayPrev}
                        className="change-prev"
                    >
                        Change Day Prev
                    </button>
                : null
            }
            <button
                onClick={onChangeDayNext}
                className="change-next"
            >Change Day Next
            </button>
        </div>
    );
};

export default DisplayWeather;