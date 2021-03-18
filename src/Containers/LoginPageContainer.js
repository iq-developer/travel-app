import React from 'react';
import LoginPage from "../pages/LoginPage/LoginPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {IsSuccess, LoginAuthThunk} from "../redux/reducers/AuthReducer";
import {withRouter} from "react-router-dom";


const LoginPageContainer = (props) => {


    return <LoginPage {...props} />
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
    }),
    withRouter,
) (LoginPageContainer);

