import React, {useEffect} from 'react';
import s from './Weather.module.css';
import cn from 'classnames'

import cloudy from './../../../common/img/cloudy-day.svg';
import clear from './../../../common/img/day.svg';
import snowy from './../../../common/img/snowy.svg';
import rainy from './../../../common/img/rainy.svg';
import PointLoader from "../../preloaders/PointLoader/PointLoader";
import {languageFunc} from "../../../common/functions/functions";

const Weather = React.memo(({SetWeatherThunk, weather, city, isFetching, language, lang}) => {


    useEffect(() => {
        SetWeatherThunk(city, language)
    }, [language])

    return (
        <article className={s.weather}>
            <h4>{languageFunc(lang,
                'Погода в г. ',
                'Weather in ',
                'Wetter in ')}{city}</h4>
            {!!isFetching && <PointLoader />}

            { !isFetching &&!!weather.data && <div>
                <div className={s.temp}>
                {(weather.data.weather[0].main === "Clouds") && <div><img className={cn(
                    {[s.p20]: true}
                )} src={cloudy} alt="cloudy"/></div>}
                {(weather.data.weather[0].main === "Clear") && <div><img className={cn(
                    {[s.p20]: true}
                )} src={clear} alt="clear"/></div>}
                {(weather.data.weather[0].main === "Snow") && <div><img className={cn(
                    {[s.p20]: true}
                )} src={snowy} alt="snowy"/></div>}
                {(weather.data.weather[0].main === "Mist") && <div><img className={cn(
                    {[s.p20]: true}
                )} src={clear} alt="clear"/></div>}
                {(weather.data.weather[0].main === "Rain") && <div><img className={cn(
                    {[s.p20]: true}
                )}  src={rainy} alt="rain"/></div>}
                <p className={s.temperatura}>{Math.round(weather.data.main.temp)} °C</p>
            </div>
                <p className={s.weatherDescription}>{weather.data.weather[0].description}</p>
            </div>
            }

        </article>
    );
})

export default Weather;