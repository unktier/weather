import React from 'react';
import North from './Directions/north.png';
import South from './Directions/south.png';
import East from './Directions/east.png';
import West from './Directions/west.png';
import NorthEast from './Directions/northeast.png';
import SouthEast from './Directions/southeast.png';
import NorthWest from './Directions/northwest.png';
import SouthWest from './Directions/southwest.png';

const WIND_DIRECTION = {
    N: North,
    S: South,
    E: East,
    W: West,
    NE: NorthEast,
    SE: SouthEast,
    NW: NorthWest,
    SW: SouthWest
};

const WindDirection = ({ windDirection }) => {
    return (
        <div>
            <img 
                src={WIND_DIRECTION[windDirection]}
                alt="wind direction"
            />
        </div>
    );
};

export default WindDirection;