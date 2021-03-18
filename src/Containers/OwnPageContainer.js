import React, {useEffect} from 'react'
import OwnPage from "../Components/OwnPage/OwnPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {SearchFunction} from "../common/functions/functions";
import {editInputValue, SetCountryForCardThunk} from "../redux/reducers/CountryCardsReducer";


const OwnPageContainer = (props) => {

    let language = ''

    if (props.lang === 'Русский') {
        language = 'ru';
    } else if (props.lang === 'English') {
        language = 'en';
    } else if (props.lang === 'Deutsche') {
        language = 'gr';
    }



    useEffect(() => {
        props.SetCountryForCardThunk(language)
    }, [language])

    return (
        <OwnPage SearchArr={SearchFunction(props.lang, props.countrysForCard, props.inputValue, props.isFetching)} {...props} />
    )
}


const mapStateToProps = (state) => {
    return {
        countrysForCard:state.CountryCardsReducer.countrysForCard,
        inputValue:state.CountryCardsReducer.inputValue,
        countryAfterInput:state.CountryCardsReducer.countryAfterInput,
        isFetching: state.CountryCardsReducer.isFetching
    }
};

export default compose(
    connect(mapStateToProps, {
        SetCountryForCardThunk,
        editInputValue,
    })
) (OwnPageContainer);