import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {IsFetching, IsSuccess, LoginAuthThunk} from "../redux/reducers/AuthReducer";
import {withRouter} from "react-router-dom";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import {RegisterWithoutAva} from "../redux/reducers/RegisterReducer";


const RegisterPageContainer = (props) => {


    return <RegisterPage {...props} />
};

const mapStateToProps = (state) => {
    return {
        isFetching:state.AuthReducer.isFetching,
        isError:state.AuthReducer.isError,
        isSuccess:state.AuthReducer.isSuccess,
        lang:state.LangReducer.lang,
    }
};

export default compose(
    connect(mapStateToProps, {
        LoginAuthThunk,
        IsSuccess,
        IsFetching,
        RegisterWithoutAva,
    }),
    withRouter,
) (RegisterPageContainer);

