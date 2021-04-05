import React from 'react';
import './TimePoint.css';

const TIME_START = {
    1: 3,
    3: 9,
    5: 15,
    7: 21
};

const TIME_CONVERT = {
    14: '2 PM',
    17: '5 PM',
    20: '8 PM',
    23: '11 PM'
};

const TimePoint = ({ index, startTime, timePoint, firstRender }) => {
    let newTime;
    if (timePoint <= TIME_START[firstRender]) {
        newTime = startTime + ((index + 1) * 3);
    } else {
        newTime = 2 + ((index) * 3);
    };

    return (
        <div className="time-point">
            {newTime >= 14 ? TIME_CONVERT[newTime] : `${newTime} AM`}
        </div>
    );
};

export default TimePoint;