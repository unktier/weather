import React from 'react';

const TimePoint = ({ index, startTime }) => {
    const newTime = startTime + ((index + 1) * 3);
    console.log(startTime);
    return (
        <div>
            {newTime}
        </div>
    )
}

export default TimePoint;