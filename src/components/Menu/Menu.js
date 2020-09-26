import React from 'react';
import './Menu.css';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/weatherLogo.svg'

const Menu = () => {
    return (
        <div className={'Menu'}>
            <img src={logo} className={'Logo'} alt="logo" />
            <ul>
                <li>
                    <NavLink to="/" exact >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/by-location" exact >By Location</NavLink>
                </li>
                <li>
                    <NavLink to="/by-country" exact >By Country</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu;