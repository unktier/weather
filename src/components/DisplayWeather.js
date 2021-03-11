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
    const [currentHour, setCurrentHour] = useState(null);

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
                    lon: 113.17,
                    lat: 23.09,
                    product: 'civil',
                    output: 'json'
                }
            });            

            // splitting data into 8x8 until I find a better solution
            /*
                time reference
                00 = 02:00
                06 = 08:00
                12 = 14:00
                18 = 20:00
            */

            const newArray = [...data.dataseries];
            let updateArray = [];
            let sliceTo = 8;
    
            for (let i = 0; i < newArray.length; i++) {
                if (i % 8 === 0 || i === 0) {
                    updateArray = [...updateArray, newArray.slice(i, sliceTo)];
                    sliceTo += 8;
                };
            };
              
            setWeatherData(updateArray);
            setInitDate(data.init)
        };

        if (initDate) {
            onInitTime();
        }

        if (longitude && latitude) {
            getLocation();
        };

    }, [longitude, latitude, initDate]);

    const onInitTime = () => {
        const year = initDate.slice(0, 4);
        const month = initDate.slice(4, 6);
        const day = initDate.slice(6, 8);
        const ztime = initDate.slice(8, 10);
        const currentDate = `${year}-${month}-${day}T18:00:00Z`;
        const initTime = new Date(currentDate);
        setCurrentHour(initTime.getHours());
    };

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
                    changeDay < 7 && weatherData ? <button
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