import React, { Component } from 'react';
import './Country.css';
import {connect} from "react-redux";

import Spinner from '../../../UI/Spinner/Spinner';
import Error from '../../../UI/Error/Error';
import { getWeather } from '../../../server/index';
import { convertKelvinToCelsius } from '../../../handlers/utility';
import { countries } from '../../../handlers/utility';

class Country extends Component {

    state = {
        "country": {
            "name": null,
            "city": null,
            "flag": null,
            "loc": null,
            "weather": {
                "classIcon": null,
                "description": null
            },
            "temperature": null,
            "humidity": null,
            "windSpeed": null,
            "windDegree": null
        },
        "loading": true,
        "show": false,
        "error": false,
    }

    componentDidMount () {

        const country = countries.find(country => country.slug === this.props.match.params.countryLink);

        this.setState({
            ...this.state,
            country: {
                ...this.state.country,
                name: country.name,
                city: country.city,
                flag: country.flag,
                loc: country.loc,
            }
        });

        getWeather(this.props.weatherAppId, country.loc, weather => {

            this.setState({
                ...this.state,
                country: {
                    ...this.state.country,
                    weather: {
                        ...this.state.country.weather,
                        classIcon: weather.weather[0].id,
                        description: weather.weather[0].description
                    },
                    temperature: weather.main.temp,
                    humidity: weather.main.humidity,
                    windSpeed: weather.wind.speed,
                    windDegree: weather.wind.deg
                },
                loading: false,
                show: true
            });
        }, error => {

            this.setState({
                ...this.state,
                loading: false,
                error: true
            });
        });
    }

    render() {

        const { country, loading, show, error } = this.state;

        return (
            <div className={'WeatherBox'}>
                <h1>Country - Weather</h1>
                {loading && <Spinner />}
                {show &&
                <div className={'WeatherContent'}>
                    <div className={'Column-4'}>
                        <h2>Flag</h2>
                        <p><img src={ country.flag } width="100px" alt={ country.name } /></p>
                    </div>
                    <div className={'Column-4'}>
                        <h2>Country</h2>
                        <p>{ country.name }</p>
                    </div>
                    <div className={'Column-4'}>
                        <h2>City</h2>
                        <p>{ country.city }</p>
                    </div>
                    <div className={'Column-6 WeatherResult'}>
                        <h2>Weather</h2>
                        <span className={ 'wi wi-owm-' + country.weather.classIcon + ' font-size-3rem' } role="img" />
                        <p>{ country.weather.description }</p>
                    </div>
                    <div className={'Column-6 TemperatureResult'}>
                        <h2>Temperature</h2>
                        <span className={'font-size-3rem'}>{ convertKelvinToCelsius(country.temperature) }</span>
                        <span role="img"
                              className={'wi wi-thermometer font-size-3rem'} />
                    </div>
                    <div className={'Column-4'}>
                        <h2><span className={'wi wi-raindrops'} role="img" /> Humidity</h2>
                        <p>{ country.humidity }%</p>
                    </div>
                    <div className={'Column-4'}>
                        <h2><span className={'wi wi-strong-wind'} role="img" /> Wind Speed</h2>
                        <p>{ country.windSpeed }m/s</p>
                    </div>
                    <div className={'Column-4'}>
                        <h2><span className={'wi wi-direction-up'} role="img" /> Wind Degree</h2>
                        <p>{ country.windDegree }&deg;</p>
                    </div>
                </div>}
                {error && <Error />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Country);