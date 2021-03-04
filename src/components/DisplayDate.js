import React from 'react';
import './DisplayDate.css';

const DisplayDate = (props) => {
    const onDateChange = () => {
        const updateDate = new Date();
        updateDate.setDate(updateDate.getDate() + props.changeDay)
        return updateDate.toDateString();
    };

    return (
        <h3 className="display-date">
            {onDateChange()}
        </h3>
    );
};

export default DisplayDate;