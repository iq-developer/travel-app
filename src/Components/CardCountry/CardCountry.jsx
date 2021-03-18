import React from 'react';
import s from './CardCountry.module.css'
import {NavLink} from "react-router-dom";
import {languageFunc} from "../../common/functions/functions";

const CardCountry = ({t, lang, country, capital, img, id}) => {

    return (
        <NavLink to={`/country/${id}`}>
            <section className={s.section}>
              <img
                className={s.opacity}
                src={img}
                alt="photo_country"
              />
              <h2 className={s.link}>
                {country}<br/>
                <span>
                  {capital}
                </span>
              </h2>
            </section>
        </NavLink>
    );
};

export default CardCountry;