import React from 'react';
import './ByCountry.css';

import CountryItem from '../../components/CountryItem/CountryItem';

import { countries } from '../../handlers/utility';

const ByCountry = props => {

    const list = countries.map(country => <CountryItem
        key={country.id}
        name={country.name}
        flag={country.flag}
        slug={country.slug} />);

    return (
        <div className={'WeatherBox'}>
            <h1>By Country</h1>
            <div className={'WeatherContent'}>
                {list}
            </div>
        </div>
    )
}


export default ByCountry;