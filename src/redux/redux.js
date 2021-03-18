import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import LangReducer from "./reducers/LangReducer";
import CountryCardsReducer from "./reducers/CountryCardsReducer";
import CountryPageReducer from "./reducers/CountryPageReducer";
import WeatherReducer from "./reducers/WeatherReducer";
import ConverterReducer from "./reducers/ConverterReducer";
import AuthReducer from "./reducers/AuthReducer";
import RegisterPage from "./reducers/RegisterReducer";



let reducers = combineReducers({
    LangReducer,
    CountryCardsReducer,
    WeatherReducer,
    ConverterReducer,
    CountryPageReducer,
    AuthReducer,
    RegisterPage,
});

const persistConfig = {
    key: 'ReactEPAMLobikov',
    storage: storage,
    whitelist: ['LangReducer'] // which reducer want to locastore
};

const pReducer = persistReducer(persistConfig, reducers);



const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };