import {apiLogin} from "../../API/apiCountry";

const EDIT_IS_FETCHING = 'EDIT_IS_FETCHING/AuthReducer';
const IS_ERROR = 'IS_ERROR/AuthReducer';
const IS_SUCCESS = 'IS_SUCCESS/AuthReducer';


const initialState = {
    isFetching: null,
    isError: null,
    isSuccess: null,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.bool
            }
        }
        case IS_ERROR: {
            return {
                ...state,
                isError: action.error
            }
        }
        case IS_SUCCESS: {

            return {
                ...state,
                isSuccess: action.bool
            }
        }
        default: return state
    }
}

export const IsFetching = (bool) => ({type:EDIT_IS_FETCHING, bool})
const IsError = (error) => ({type: IS_ERROR, error})
export const IsSuccess = (bool) => ({type: IS_SUCCESS, bool})



export const LoginAuthThunk = (data) => async (dispatch) => {
    try {
        dispatch(IsFetching(true))
        dispatch(IsError(false))
        let response = await apiLogin.login(data)
        if (response.status === 200) {
            dispatch(IsSuccess(response))
        }
        dispatch(IsFetching(false))
    } catch (err) {
        dispatch(IsError(true))
        dispatch(IsFetching(false))
    }



}


export default AuthReducer;