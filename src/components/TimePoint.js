import React from 'react';

const TimePoint = ({ index, startTime }) => {
    const newTime = startTime + ((index + 1) * 3);

    return (
        <div>
            {newTime}
        </div>
    )
}

export default TimePoint;