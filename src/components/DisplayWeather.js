import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';
import DisplayDate from './DisplayDate';
import './DisplayWeather.css';

const DisplayWeather = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [initDate, setInitDate] = useState(null);
    const [changeDay, setChangeDay] = useState(0);
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

        const getLocation = async () => {
            const { data } = await axios.get('http://www.7timer.info/bin/api.pl', {
                params: {
                    lon: longitude,
                    lat: latitude,
                    product: 'civil',
                    output: 'json'
                }
            });            

            /*
                time reference
                00 = 02:00
                06 = 08:00
                12 = 14:00
                18 = 20:00
            */

            const newArray = [...data.dataseries];
            let updateArray = [];

            // if 3 -> 8-3 = 5
            // if 5 -> 8-5 = 3
            // if 7 -> 8-7 = 1
            // if 1 -> 8-1 = 7

            if (startDisplay > 0) {
                chunkData(newArray);
            };
            setInitDate(data.init)
        };

        if (initDate) {
            onInitTime();
        };

        if (longitude && latitude) {
            getLocation();
        };

    }, [longitude, latitude, initDate, startDisplay]);

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

    const onInitTime = () => {
        const year = initDate.slice(0, 4);
        const month = initDate.slice(4, 6);
        const day = initDate.slice(6, 8);
        const ztime = initDate.slice(8, 10);
        const currentDate = `${year}-${month}-${day}T${ztime}:00:00Z`;
        const initTime = new Date(currentDate);
        const currentHour = initTime.getHours();

        // check current hour and decide how many 
        // weather points to display for first day
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

    const onChangeDayNext = () => {
        if (changeDay < 8) {
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
                <DisplayDate changeDay={changeDay} />
            </div>
            {
                changeDay > 0 ? 
                    <button
                        onClick={onChangeDayPrev}
                        className="change-prev"
                    >
                        &#8249;
                    </button>
                :   <div
                        className="empty-button-left"
                    ></div>
            }
            <Weather 
                weatherData={weatherData}
                changeDay={changeDay}
            />
            {
                    changeDay < 8 && weatherData ? <button
                        onClick={onChangeDayNext}
                        className="change-next"
                    >
                    &#8250;
                    </button>
                :   <div
                        className="empty-button-right"
                    ></div>
            }
        </div>
    );
};

export default DisplayWeather;