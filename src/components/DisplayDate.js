import React from 'react';
import './DisplayDate.css';

const DisplayDate = ({ changeDay }) => {
    const onDateChange = () => {
        const updateDate = new Date();
        updateDate.setDate(updateDate.getDate() + changeDay)
        return updateDate.toDateString();
    };

    return (
        <h3 className="display-date">
            {onDateChange()}
        </h3>
    );
};

export default DisplayDate;