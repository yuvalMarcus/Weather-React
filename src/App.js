import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Weather from './containers/Weather/Weather';
import ByLocation from './containers/ByLocation/ByLocation';
import ByCountry from "./containers/ByCountry/ByCountry";
import Country from './containers/ByCountry/Country/Country';

class App extends Component {
  render() {
    return (
        <BrowserRouter basename="/projects/react/weather/">
            <Layout>
                <Switch>
                    <Route path="/by-location" component={ByLocation}/>
                    <Route path="/by-country" component={ByCountry}/>
                    <Route path="/country/:countryLink" component={Country}/>
                    <Route path="/" exact component={Weather}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
