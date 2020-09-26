import axios from "axios/index";

export const getWeather = (weatherAppId, loc, succeed, failed) => {

    axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + loc[0] + '&lon=' + loc[1] + '&appid=' + weatherAppId)
        .then(response => {

            const weather = response.data;

            succeed(weather);

        }).catch(error => {

        failed(error);
    });
};

export const getMyLocation = (succeed, failed) => {

    axios.get('https://ipinfo.io/json?token=3022761a2a29dd')
        .then(response => {

            const location = response.data;

            succeed(location);

        }).catch(error => {

        failed(error);
    });
};