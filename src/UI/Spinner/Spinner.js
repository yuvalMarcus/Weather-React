import React from 'react';
import './Spinner.css';

const Spinner = props => {

    return (
        <div className={'WeatherContent LoadingData'}>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
            <span className="sr-only">Loading...</span>
        </div>
    )
};

export default Spinner;