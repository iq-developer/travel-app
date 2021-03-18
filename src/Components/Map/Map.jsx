import { YMaps, Map, Placemark, Panorama } from 'react-yandex-maps';

import s from './Mappp.module.css'

import React from 'react';
import {languageFunc} from "../../common/functions/functions";








const Mappp = ({country, lang, coordCountry, zoom, coordCapital}) => {

    const mapState = {
        center: coordCountry,
        zoom: zoom,
        controls: ['zoomControl', 'fullscreenControl'],
    };

    const COLORS = ["#F0F075", "#FB6C3F", "#3D4C76", "#49C0B5"];
    let language = ''

    if (lang === 'Русский') {
        language = 'ru';
    } else if (lang === 'English') {
        language = 'en';
    } else if (lang === 'Deutsche') {
        language = 'en';
    }
    const mapRef = React.createRef(null);

    const getRegions = ymaps => {
        if (mapRef && mapRef.current) {
            let objectManager = new ymaps.ObjectManager();
            ymaps.borders
                .load(country, {
                    lang: "ru",
                    quality: 2
                })
                .then(function(result) {
                    // Очередь раскраски.
                    let queue = [];
                    // Создадим объект regions, где ключи это ISO код региона.
                    let regions = result.features.reduce(function(acc, feature) {
                        // Добавим ISO код региона в качестве feature.id для objectManager.
                        let iso = feature.properties.iso3166;
                        feature.id = iso;
                        // Добавим опции региона по умолчанию.
                        feature.options = {
                            fillOpacity: 0.6,
                            strokeColor: "#FFF",
                            strokeOpacity: 0.5
                        };
                        acc[iso] = feature;
                        return acc;
                    }, {});
                    // Функция, которая раскрашивает регион и добавляет всех нераскрасшенных соседей в очередь на раскраску.
                    function paint(iso) {
                        let allowedColors = COLORS.slice();
                        // Получим ссылку на раскрашиваемый регион и на его соседей.
                        let region = regions[iso];
                        let neighbors = region.properties.neighbors;
                        // Если у региона есть опция fillColor, значит мы его уже раскрасили.
                        if (region.options.fillColor) {
                            return;
                        }
                        // Если у региона есть соседи, то нужно проверить, какие цвета уже заняты.
                        if (neighbors.length !== 0) {
                            neighbors.forEach(function(neighbor) {
                                let fillColor = regions[neighbor].options.fillColor;
                                // Если регион раскрашен, то исключаем его цвет.
                                if (fillColor) {
                                    let index = allowedColors.indexOf(fillColor);
                                    if (index !== -1) {
                                        allowedColors.splice(index, 1);
                                    }
                                    // Если регион не раскрашен, то добавляем его в очередь на раскраску.
                                } else if (queue.indexOf(neighbor) === -1) {
                                    queue.push(neighbor);
                                }
                            });
                        }
                        // Раскрасим регион в первый доступный цвет.
                        region.options.fillColor = allowedColors[0];
                    }
                    // Добавим регионы на карту.
                    result.features = [];
                    for (let reg in regions) {
                        result.features.push(regions[reg]);
                    }
                    objectManager.add(result);
                    mapRef.current.geoObjects.add(objectManager);
                });
        }
    };



    return (
            <div  className={s.fr}>
                <h1 className={s.center}>{languageFunc(lang,
                    'Карта',
                    'Map',
                    'Karte')}</h1>
                <YMaps key={language} query={{
                    lang: language
                }}>
                    <Map
                        width={'60%'}
                        height={'300px'}
                        instanceRef={mapRef}
                        state={mapState}
                        onLoad={ymaps => getRegions(ymaps)}
                        modules={["borders", "ObjectManager", 'control.ZoomControl', 'control.FullscreenControl']}
                    >
                        <Placemark

                            defaultGeometry={coordCapital} />
                    </Map>
                </YMaps>
            </div>
    );
};

export default Mappp;




