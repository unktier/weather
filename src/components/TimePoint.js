import React from 'react';

const TIME_START = {
    1: 3,
    3: 9,
    5: 15,
    7: 21
};

const TimePoint = ({ index, startTime, timePoint, firstRender }) => {
    let newTime;
    if (timePoint <= TIME_START[firstRender]) {
        newTime = startTime + ((index + 1) * 3);
    } else {
        newTime = 2 + ((index) * 3);
    };

    return (
        <div>
            {newTime}
        </div>
    )
}

export default TimePoint;