import React from 'react';
import './Layout.css';

import Menu from '../Menu/Menu';

const Layout = (props) => (
    <div className={'WeatherContainer"'}>
        <Menu />
        {props.children}
    </div>
);

export default Layout;