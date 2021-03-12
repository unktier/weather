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
                    lat: latitude   ,
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

            // ztime is used to split the array from specific points
            const ztime = {
                1: [1, 9, 17, 25, 33, 41, 49, 57],
                3: [3, 11, 19, 27, 35, 43, 51, 59],
                5: [5, 13, 21, 29, 37, 45, 53, 61],
                7: [7, 15, 23, 31, 39, 47, 55, 63]
            };

            if (startDisplay > 0) {
                let incrementBy = startDisplay;
                for (let i = 0; i < newArray.length; i++) {
                    if (i === 0) {
                        updateArray = [...updateArray, newArray.slice(i, incrementBy)];
                        incrementBy += 8;
                    } else if (ztime[startDisplay].includes(i)){
                        updateArray = [...updateArray, newArray.slice(i, incrementBy)];
                        incrementBy += 8;
                    };
                };
                setWeatherData(updateArray);
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

        if (currentHour === 8) {
            setStartDisplay(5);
        } else if (currentHour === 20) {
            setStartDisplay(1);
        } else if (currentHour === 14) {
            setStartDisplay(3)
        } else if (currentHour === 2) {
            setStartDisplay(7);
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