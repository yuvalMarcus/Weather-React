import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

import byLocation from '../../assets/images/byLocation.svg';
import byCountry from '../../assets/images/byCountry.svg';

const Weather = props => {

    return (
        <div className={'WeatherBox'}>
            <h1>Weather</h1>
            <div className={'WeatherContent'}>
                <div className={'Column-6'}>
                    <Link to="/by-location">
                        <img src={byLocation} alt="By Location" width="100px" />
                        <h2>By Location</h2>
                    </Link>
                </div>
                <div className={'Column-6'}>
                    <Link to="/by-country">
                        <img src={byCountry} alt="By Country" width="100px" />
                        <h2>By Country</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Weather;