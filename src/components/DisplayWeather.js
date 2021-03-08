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

            const newArray = [...data.dataseries];
            let updateArray = [];
            let sliceTo = 8;
    
            for (let i = 0; i < newArray.length; i++) {
                if (i % 8 === 0 || i === 0) {
                    updateArray = [...updateArray, newArray.slice(i, sliceTo)];
                    sliceTo += 8;
                };
            };
            
            
            // const ztime = data.init.slice(8, 10);
            // const newArray = [...data.dataseries];
            // let updateArray = [];
            // let sliceTo = 8;
            // let newSlice = 3;
            // const ztime06 = [3, 11, 19, 27, 35, 43, 51, 59];
    
            // for (let i = 0; i < newArray.length; i++) {
            //     if (ztime === "06" && i === 0) {
            //         updateArray = [...updateArray, newArray.slice(i, 3)];
            //         newSlice += 8;
            //     } else if (ztime06.includes(i)){
            //         console.log(i)
            //         updateArray = [...updateArray, newArray.slice(i, newSlice)];
            //         newSlice += 8;
            //     }
            // };
            setWeatherData(updateArray);
            setInitDate(data.init)
        };

        if (longitude && latitude) {
            getLocation();
        };

    }, [longitude, latitude]);

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