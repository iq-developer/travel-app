import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";


import App from "../App";

const AppContainer = (props) => {

    return (
        <App {...props} />
    );
};


const mapStateToProps = (state) => {
    return {
        lang:state.LangReducer.lang,
    }
};


export default compose(
    connect(mapStateToProps, {
    })
) (AppContainer);