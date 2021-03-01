import React from 'react';
import ClearDay from './Icons/day.svg';
import ClearNight from './Icons/night.svg';
import PartlyCloudyDay from './Icons/cloudy-day-2.svg';
import PartlyCloudyNight from './Icons/cloudy-night-2.svg';
import CloudyDay from './Icons/cloudy-day-3.svg'
import CloudyNight from './Icons/cloudy-night-3.svg';
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
import RainSnow from './Icons/rainy-7.svg';

/* 
    reference

    "clearday"
    "clearnight"
    "lightrainday"
    "lightrainnight"
    "rainnight"
    "rainday"
    "pcloudyday" - partly cloudy day
    "pcloudynight" - partly cloudy night
    "mcloudynight" - cloudy night
    "mcloudyday" - cloudy day
    "cloudyday" - very cloudy day
    "cloudynight" - very cloudy night
    "ishowerday" - isolated shower day
    "ishowernight" - isolated shower night
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

const WEATHER_TYPE = {
    clearday: ClearDay,
    clearnight: ClearNight,
    lightrainday: LightRain,
    lightrainnight: LightRain,
    rainnight: Rain,
    rainday: Rain,
    pcloudyday: PartlyCloudyDay,
    pcloudynight: PartlyCloudyNight,
    mcloudyday: CloudyDay,
    mcloudynight: CloudyNight,
    cloudyday: VeryCloudyDay,
    cloudynight: VeryCloudyNight,
    ishowerday: IsolatedShower,
    ishowernight: IsolatedShower,
    oshowerday: OccasionalShower,
    oshowernight: OccasionalShower,
    lightsnowday: LightSnow,
    lightsnownight: LightSnow,
    humidday: Humid,
    humidnight: Humid,
    snowday: Snow,
    snownight: Snow,
    tsday: ThunderStorm,
    tsnight: ThunderStorm,
    tsrainday: ThunderStorm,
    tsrainnight: ThunderStorm,
    rainsnowday: RainSnow,
    rainsnownight: RainSnow
};

const WeatherIcon = (props) => {
    return (
        <div className="weather-icon">
            <img 
                src={WEATHER_TYPE[props.weatherType]} 
                alt="weather type" 
            />
        </div>
    );
};

export default WeatherIcon;