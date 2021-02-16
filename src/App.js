import React, { useState, useEffect } from 'react';

const App = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

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
    }, [latitude, longitude]);

    return (
        <div className="app">
            App
        </div>
    );
};

export default App;