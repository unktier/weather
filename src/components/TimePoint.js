import React from 'react';
import useWeather from '../hooks/useWeather';

const TimePoint = ({ index }) => {
    const [ ,startTime] = useWeather();
    // console.log(startTime);
    const newTime = startTime + ((index + 1) * 3);



    return (
        <div>
            {newTime}
        </div>
    )
}

export default TimePoint;