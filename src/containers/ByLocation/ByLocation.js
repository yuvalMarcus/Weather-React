import React, { Component } from 'react';
import './ByLocation.css';
import { connect } from 'react-redux';

import Spinner from '../../UI/Spinner/Spinner';
import Error from '../../UI/Error/Error';
import { getMyLocation, getWeather } from '../../server/index';
import { convertKelvinToCelsius } from '../../handlers/utility';

class ByLocation extends Component {

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

        this.refreshLocation();
    }

    componentDidUpdate(prevProps, prevState) {

        if(!prevState.country.loc || this.state.country.loc[0] !== prevState.country.loc[0] || this.state.country.loc[1] !== prevState.country.loc[1]) {

            getWeather(this.props.weatherAppId, this.state.country.loc, weather => {

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
    }

    refreshLocation = () => {

        getMyLocation(location => {

            this.setState({
                ...this.state,
                country: {
                    ...this.state.country,
                    name: location.country,
                    city: location.city,
                    loc: location.loc
                }
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
                <h1>My Location - Weather</h1>
                <button className={'UpdateLo'} onClick={this.refreshLocation}>Refresh Location</button>
                {loading && <Spinner />}
                {show &&
                <div className={'WeatherContent'}>
                    <div className={'Column-6'}>
                        <h2>Country</h2>
                        <p>{ country.name }</p>
                    </div>
                    <div className={'Column-6'}>
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

export default connect(mapStateToProps)(ByLocation);