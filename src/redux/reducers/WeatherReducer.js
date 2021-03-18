import {weatherApi} from "../../API/apiWeather";

const SET_WEATHER = 'SET_WEATHER/WeatherReducer';
const IS_FEATCHING = 'IS_FEATCHING/WeatherReducer';
const IS_ERROR = 'IS_ERROR/WeatherReducer';

const initialState = {
    isFetching: null,
    weather: [],
    isError: null,
}

const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: {
            return {
                ...state,
                weather: action.weather
            }
        }
        case IS_FEATCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case IS_ERROR: {
            return {
                ...state,
                isError: action.error
            }
        }
        default: return state
    }
}

const SetWeather = (weather) => ({type: SET_WEATHER, weather})
const IsFetching = (isFetching) => ({type: IS_FEATCHING, isFetching})
const IsError = (error) => ({type: IS_ERROR, error})

export const SetWeatherThunk = (city, language) => async (dispatch) => {
    try {
        dispatch(IsFetching(true))
        let response = await weatherApi.byCityName(city, language)
        if (response.status === 200) {
            dispatch(IsError(false))
            dispatch(SetWeather(response))
        }
        dispatch(IsFetching(false))
    } catch (err) {
        dispatch(IsError(true))
        dispatch(IsFetching(false))
    }



}

export default WeatherReducer;