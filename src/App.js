import React, { useState, useEffect } from 'react';
import DisplayWeather from './components/DisplayWeather';

const App = () => {
    return (
        <div className="app">
            <DisplayWeather />
        </div>
    );
};

export default App;