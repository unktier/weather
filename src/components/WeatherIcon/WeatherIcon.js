import React from 'react';
import ClearDay from './Icons/day.svg';
import ClearNight from './Icons/night.svg';
import PartlyCloudyDay from './Icons/cloudy-day-2.svg';
import PartlyCloudyNight from './Icons/cloudy-night-2.svg';
import CloudyNight from './Icons/cloudy-night-3.svg';
import CloudyDay from './Icons/cloudy-day-3.svg'
import VeryCloudyDay from './Icons/cloudy.svg';
import VeryCloudyNight from './Icons/cloudy.svg';
import LightRain from './Icons/rainy-4.svg';
import Rain from './Icons/rainy-6.svg'
import IsolatedShower from './Icons/rainy-1.svg';
import OccasionalShower from './Icons/rainy-3.svg';
import LightSnow from './Icons/snowy-5.svg';
import Snow from './Icons/snowy-6.svg';
import Humid from './Icons/cloudy-day-1.svg';
import ThunderStorm from './Icons/thunder.svg';

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
    "tsrainday" - thunderstorm day
    "tsrainnight" - thunderstorm rain night
    "rainsnowday"
    "rainsnownight"

*/

const WeatherIcon = () => {
    return (
        <div className="weather-icon">
            {/* <img src={Day} alt="day" /> */}
        </div>
    );
};

export default WeatherIcon;