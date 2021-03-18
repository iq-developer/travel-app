import {weatherApi} from "../../API/apiWeather";
import {apiLogin} from "../../API/apiCountry";
import {IsSuccess, LoginAuthThunk} from "./AuthReducer";

const EDIT_IS_FETCHING = 'EDIT_IS_FETCHING/RegisterReducer';
const EDIT_IS_ERROR = 'EDIT_IS_ERROR/RegisterReducer';
const SET_RESPONSE_AUTH = 'SET_RESPONSE_AUTH/RegisterReducer';


const initialState = {
    isFetching: null,
    isError: null,
    responseAuth: null,
}

const RegisterPage = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_IS_FETCHING: {
            return {
                isFetching:action.bool,
            }
        }
        case EDIT_IS_ERROR: {
            return {
                isError:action.bool,
            }
        }
        case SET_RESPONSE_AUTH: {
            return {
                responseAuth:action.response,
            }
        }
        default: return state
    }
}

const editIsFetching = (bool) => ({type:EDIT_IS_FETCHING,bool})
const editIsError = (bool) => ({type:EDIT_IS_ERROR ,bool})
const setResponseAuth = (response) => ({type:SET_RESPONSE_AUTH, response})

export const RegisterWithoutAva = (value) => async (dispatch) => {
        dispatch(editIsFetching(true))
            let response = await apiLogin.register(value)
            if (response.status === 201) {
                dispatch(setResponseAuth({email:value.email,
                                                    password:value.password}))
            }
        dispatch(editIsFetching(false))




}


export default RegisterPage;

