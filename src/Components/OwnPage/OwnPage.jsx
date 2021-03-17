import React, {useEffect} from 'react';
import CardCountry from "../CardCountry/CardCountry";
import s from './OwnPage.module.css';
import cn from 'classnames';
import background from './../../common/img/tower.jpg';
import CirklePreloader from "../preloaders/CirklePreloader/CirklePreloader";
import { Input } from 'antd';
import {languageFunc} from "../../common/functions/functions";

const { Search } = Input;


const OwnPage = ({t, countrysForCard, lang, inputValue, SearchArr, isFetching, ava, editInputValue, }) => {



    return (
        <div className={s.pad} >
            {!!isFetching && <CirklePreloader />}
            {!isFetching && <>
            <div style={{ backgroundImage: `url(${background})` }} className={s.headerSearch}>

                <h1 className={s.title}>
                    {languageFunc(lang,
                        'Путешествие начинается здесь',
                        'The journey starts here',
                        'Die Reise beginnt hier')}</h1>
                <div className={s.fl}>
                <div className={s.input}>
                    <Search
                        placeholder={languageFunc(lang,
                            'Введите город или страну',
                            'Enter city or country ',
                            'Stadt oder Land eingeben ')}
                        allowClear
                        enterButton={languageFunc(lang,
                    'Найти',
                        'Search',
                        'Suche')}
                        size="large"
                        value={inputValue}
                        autoFocus={true}
                        onChange={(e) => editInputValue(e.currentTarget.value)}
                        onSearch={() => window.scrollTo(0, 391)}
                    />
                </div>
                </div>

            </div>
        <div className={cn(s.ownPage, s.grid)}>

            {/* <img src={ava} alt=""/> */}
            {inputValue && SearchArr.map(card => <CardCountry
                t={t} key={card._id}
                id={card._id}
                lang={lang}
                country={card.name}
                capital={card.capital}
                img={card.img}
            />)}
            {!inputValue && !isFetching && countrysForCard.map(card => <CardCountry
                t={t}
                key={card._id}
                id={card._id}
                lang={lang}
                country={card.name}
                capital={card.capital}
                img={card.img}
            />)}
        </div>
            </>}
        </div>
    );
};

export default OwnPage;