import franceFlag from '../assets/images/franceFlag.svg';
import unitedStatesFlag from '../assets/images/unitedStatesFlag.svg';
import brazilFlag from '../assets/images/brazilFlag.svg';
import australiaFlag from '../assets/images/australiaFlag.svg';
import japanFlag from '../assets/images/japanFlag.svg';
import canadaFlag from '../assets/images/canadaFlag.svg';
import egyptFlag from '../assets/images/egyptFlag.svg';
import argentinaFlag from '../assets/images/argentinaFlag.svg';
import chinaFlag from '../assets/images/chinaFlag.svg';
import germanyFlag from '../assets/images/germanyFlag.svg';

export const countries = [
    {
        "id": 1,
        "name": "France",
        "city": "Paris",
        "flag": franceFlag,
        "slug": "france",
        "loc": [
            48.8589508,
            2.4169284
        ]
    },
    {
        "id": 2,
        "name": "United States",
        "city": "Washington DC",
        "flag": unitedStatesFlag,
        "slug": "united-states",
        "loc": [
            38.8937804,
            -76.8748328
        ]
    },
    {
        "id": 3,
        "name": "Brazil",
        "city": "Rio de Janeiro",
        "flag": brazilFlag,
        "slug": "brazil",
        "loc": [
            -22.9132537,
            -43.166469
        ]
    },
    {
        "id": 4,
        "name": "Australia",
        "city": "Sydney",
        "flag": australiaFlag,
        "slug": "australia",
        "loc": [
            -33.8473582,
            151.2114819
        ]
    },
    {
        "id": 5,
        "name": "Japan",
        "city": "Tokyo",
        "flag": japanFlag,
        "slug": "japan",
        "loc": [
            35.6735412,
            139.8501316
        ]
    },
    {
        "id": 6,
        "name": "Canada",
        "city": "Montreal",
        "flag": canadaFlag,
        "slug": "canada",
        "loc": [
            45.5581821,
            -73.4507987
        ]
    },
    {
        "id": 7,
        "name": "Egypt",
        "city": "Cairo",
        "flag": egyptFlag,
        "slug": "egypt",
        "loc": [
            30.0596186,
            31.3283335
        ]
    },
    {
        "id": 8,
        "name": "Argentina",
        "city": "Buenos Aires",
        "flag": argentinaFlag,
        "slug": "argentina",
        "loc": [
            -34.6154615,
            -58.2935556
        ]
    },
    {
        "id": 9,
        "name": "China",
        "city": "Hong Kong",
        "flag": chinaFlag,
        "slug": "china",
        "loc": [
            22.3531294,
            114.4072158
        ]
    },
    {
        "id": 10,
        "name": "Germany",
        "city": "Berlin",
        "flag": germanyFlag,
        "slug": "germany",
        "loc": [
            52.5069329,
            13.7042305
        ]
    },
];

export const convertKelvinToCelsius = temp => {
    if (temp < 0) {
        return "below absolute zero (0 K)";
    } else {
        return Math.round(temp - 273.15);
    }
};