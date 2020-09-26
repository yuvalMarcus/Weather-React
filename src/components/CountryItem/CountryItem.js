import React from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

const countryItem = props => {

    const countryLink = "country/" + props.slug;

    return (
        <div className={'Column-2-5'}>
            <Link to={ countryLink }>
                <img src={ props.flag } width="100px" alt={ props.name } />
                <h2>{ props.name }</h2>
            </Link>
        </div>
    )
}

countryItem.defaultProps = {
    title: "no title",
    photo: "/assets/images/defaultFlag.svg",
    countryLink: "#"
}

countryItem.propTypes = {
    title: propTypes.string,
    photo: propTypes.string,
    countryLink: propTypes.string
}

export default countryItem;