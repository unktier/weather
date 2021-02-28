import React from 'react';
import ClearDay from './day.svg';
import ClearNight from './night.svg';
import PartlyCloudyDay from './cloudy-day-2.svg';
import PartlyCloudyNight from './cloudy-night-2.svg';
import CloudyNight from './cloudy-night-3.svg';
import CloudyDay from './cloudy-day-3.svg'
import VeryCloudyDay from './cloudy.svg';
import VeryCloudyNight from './cloudy.svg';
import LightRain from './rainy-4.svg';
import Rain from './rainy-6.svg'
import IsolatedShower from './rainy-1.svg';
import OccasionalShower from './rainy-3.svg';
import LightSnow from './snowy-5.svg';
import Snow from './snowy-6.svg';
import Humid from './cloudy-day-1.svg';
import ThunderStorm from './thunder.svg';

/* 
    reference
    "lightrainday"
    "lightrainnight"
    "rainnight"
    "rainday"
    "pcloudynight" - partly cloudy night
    "pcloudyday" - partly cloudy day
    "mcloudynight" - cloudy night
    "mcloudyday" - cloudy day
    "cloudyday" - very cloudy day
    "cloudynight" - very cloudy night
    "clearday"
    "clearnight"
    "ishowerday" - isolated shower
    "oshowerday" - occasional shower day
    "oshowernight" - occasional shower night
    "lightsnowday" - light snow day
    "lightsnownight" - light snow night
    "humidday" - foggy?
    "humidnight"
    "snowday"
    "snownight"
    "tsday" - thunderstorm day
    "tsnight" - thunderstorm night
    "tsrainday" (might not exist)
    "tsrainnight" - thunderstorm rain night

*/

const WeatherIcon = () => {
    return (
        <div className="weather-icon">
            {/* <img src={Day} alt="day" /> */}
        </div>
    );
};

export default WeatherIcon;