import React from 'react';

const TimePoint = ({ index, startTime, timePoint }) => {
    let newTime;
    if (timePoint <= 15) {
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