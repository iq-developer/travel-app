import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";

import {compose} from "redux";
import {connect} from "react-redux";


import CountryPage from "../Components/CountryPage/CountryPage";
import {SetOneCountryThunk} from "../redux/reducers/CountryPageReducer";


const CountryPageContainer = (props) => {

    let language = ''

    if (props.lang === 'Русский') {
        language = 'ru';
    } else if (props.lang === 'English') {
        language = 'en';
    } else if (props.lang === 'Deutsche') {
        language = 'gr';
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        props.SetOneCountryThunk(language, props.match.params.id)
    }, [language]);

    return (
        <CountryPage id={props.match.params.id} {...props} />
    );
};


const mapStateToProps = (state) => {
    return {
        allArr:state.CountryPageReducer.allArr,
        lang:state.LangReducer.lang,
        isFetching:state.CountryPageReducer.isFetching,
        countryInfo:state.CountryPageReducer.countryInfo,

    }
};


export default compose(
    connect(mapStateToProps, {
        SetOneCountryThunk,
    }),
    withRouter,
) (CountryPageContainer);