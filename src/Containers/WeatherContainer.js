import Weather from "../Components/Widgets/Weather/Weather";
import {compose} from "redux";
import {connect} from "react-redux";
import {SetWeatherThunk} from "../redux/reducers/WeatherReducer";


const WeatherContainer = (props) => {

    let language = ''

    if (props.lang === 'Русский') {
       language = 'ru';
    } else if (props.lang === 'English') {
        language = 'en';
    } else if (props.lang === 'Deutsche') {
        language = 'de';
    }

    return (
        <Weather language={language} {...props} />
    )

}


const mapStateToProps = (state) => {
    return {
        weather:state.WeatherReducer.weather,
        isFetching:state.WeatherReducer.isFetching,
        isError:state.WeatherReducer.isError,
        lang:state.LangReducer.lang,

    }
};



export default compose(
    connect(mapStateToProps, {
        SetWeatherThunk,
    })
) (WeatherContainer);