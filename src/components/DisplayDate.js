import React, { useState } from 'react';

const DisplayDate = (props) => {
    const [day, setDay] = useState(new Date().toDateString())


    return (
        <div className="display-date">
            {day}
        </div>
    );
};

export default DisplayDate;