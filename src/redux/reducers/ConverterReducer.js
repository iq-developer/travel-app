import {convertApi} from "../../API/apiConverter";

const SET_VALUE = 'SET_VALUE/ConverterReducer';
const SET_VALUE_EUR = 'SET_VALUE_EUR/ConverterReducer'
const SET_IS_FETCHING = 'SET_IS_FETCHING/ConverterReducer';
const SET_VALUE_RUB = 'SET_VALUE_RUB/ConverterReducer';

const initialState = {
    valuteUSD: '',
    valueEUR:'',
    valueRUB:'',
    isFetching: null,
}

const ConverterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE: {
            return {
                ...state,
                valuteUSD:action.val
            }
        }
        case SET_VALUE_EUR: {
            return {
                ...state,
                valueEUR:action.val
            }
        }
        case SET_VALUE_RUB: {
            return {
                ...state,
                valueRUB:action.val
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching:action.bool
            }
        }

        default: return state
    }
}

const IsFetching = (bool) => ({type:SET_IS_FETCHING, bool})
const setValue = (val) => ({type:SET_VALUE, val})
const setValueEur = (val) => ({type:SET_VALUE_EUR, val})
const setValueRub = (val) => ({type:SET_VALUE_RUB, val})





export const setConverter = (you, out) => async (dispatch) => {
    try {
        dispatch(IsFetching(true))
        let response = await convertApi.convert(you, out)
        if (response.status === 200) {

            dispatch(setValue(response.data[Object.keys(response.data)[0]]))

        }
        dispatch(IsFetching(false))
    } catch (err) {
        dispatch(IsFetching(false))
    }
}
export const setConverterEUR = (you, out) => async (dispatch) => {
    try {
        dispatch(IsFetching(true))
        let response = await convertApi.convert(you, out)
        if (response.status === 200) {

            dispatch(setValueEur(response.data[Object.keys(response.data)[0]]))

        }
        dispatch(IsFetching(false))
    } catch (err) {
        dispatch(IsFetching(false))
    }
}
export const setConverterRUB = (you, out) => async (dispatch) => {
    try {
        dispatch(IsFetching(true))
        let response = await convertApi.convert(you, out)
        if (response.status === 200) {
            dispatch(setValueRub(response.data[Object.keys(response.data)[0]]))

        }
        dispatch(IsFetching(false))
    } catch (err) {
        dispatch(IsFetching(false))
    }
}


export default ConverterReducer;
