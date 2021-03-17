import React from 'react';
import Gallery from "../Gallery/Gallery";
import ReactPlayer from 'react-player/youtube';


import s from './CountryPage.module.css'
import WeatherContainer from "../../Containers/WeatherContainer";
import ConverterContainer from "../../Containers/ConverterContainer";
import Mappp from "../Map/Map";

import Time from "../Widgets/Time/Time";
import CirklePreloader from "../preloaders/CirklePreloader/CirklePreloader";
import {languageFunc} from "../../common/functions/functions";

const CountryPage = ({ lang, countryInfo, isFetching, id, token, isAuthenticated}) => {


    return (
        <div className={s.countrypage}>
            {!!isFetching && <CirklePreloader />}
            {!isFetching && <>
              <h1 className={s.title}>{countryInfo.name}</h1>
                <div className={s.widgets}>
                  <WeatherContainer city={countryInfo.capital} />
                  <ConverterContainer youIso={countryInfo.iso}/>
                  <Time utc={countryInfo.utc} lang={lang} />
                </div>
                
                <div className={s.centerfl}>
                    <div className={s.pagef}>
                        <img className={s.imgCountry} src={countryInfo.img} alt={'IMG_COUNTRY'}/>
                        <div>
                            <div className={s.descr}><h1>{languageFunc(lang,
                                'Описание',
                                'Sights',
                                'Sehenswürdigkeiten')}</h1>
                                <p>{countryInfo.description}</p>
                                <p>{languageFunc(lang,
                                    'Столица',
                                    'Capital',
                                    'Hauptstadt')}:&nbsp; 
                                    <strong>{countryInfo.capital}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div   className={s.bor}>
                    <h1>{languageFunc(lang,
                        'Видео о стране',
                        'Country video',
                        'Ländervideo')}</h1>
                    <ReactPlayer   controls={true}  url={countryInfo.video}

                    />
                </div>



                <Gallery isAuthenticated={isAuthenticated} countryInfo={countryInfo} id={id} token={token} allArr={countryInfo.galleries} lang={lang}  />


                <Mappp country={countryInfo.countryIso}
                       lang={lang}
                       zoom={countryInfo.zoom}
                       coordCapital={countryInfo.coordCapital}
                       coordCountry={countryInfo.coordCountry} />

            </>}
        </div>
    );
};

export default CountryPage;