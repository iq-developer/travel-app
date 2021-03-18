import React from 'react';
import s from './Converter.module.css'
import PointLoader from "../../preloaders/PointLoader/PointLoader";
import {languageFunc} from "../../../common/functions/functions";





const Converter = ({ youIso, valuteUSD, valueEUR, valueRUB, isFetching, lang}) => {



    return (
        <article className={s.converter}>
            {!!isFetching && <PointLoader />}
            {!isFetching && <>
                <h4>{languageFunc(lang,
                    'Курс валют',
                    'Exchange rates',
                    'Wechselkurse')}</h4>
                <div>1 {youIso} = {valuteUSD} USD </div>
                <div>1 {youIso} = {valueEUR} EUR </div>
                <div>1 {youIso} = {valueRUB} RUB </div>
            </>}
        </article>
    );
};

export default Converter;