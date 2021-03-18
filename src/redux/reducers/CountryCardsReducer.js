import {apiCountry} from "../../API/apiCountry";

const EDIT_ARR = 'EDIT_ARR/CountryCardsReducer';
const EDIT_INPUT_VALUE = 'EDIT_INPUT_VALUE/CountryCardsReducer';
const SET_COUNTRYS_FOR_CARD = 'SET_COUNTRYS_FOR_CARD/CountryCardsReducer';
const EDIT_IS_FETCHING =  'EDIT_IS_FETCHING/CountryCardsReducer';

const initialState = {
    countrysForCard: [
/*        {
            id: 0,
            country: {
                en:'Belarus',
                ru:'Беларусь',
                gr:'Weißrussland'
            },
            capital: {
            en: 'Minsk',
            ru: 'Минск',
            gr: 'Minsk'
            },
            img:'https://pervadmin.gov.by/assets/image-cache/images/slider-centr/slider-15.46100879.jpg'

        },
        {
            id:1,
            country: {
                en:'Ukraine',
                ru:'Украина',
                gr:'Ukraine',
            },
            capital: {
                en:'Kiev',
                ru:'Киев',
                gr:'Kiew'
            },
            img:'https://epifora.by/wp-content/uploads/2016/06/kiev-aerial-e-kskursii-po-Kievu.jpg'
        },
        {
            id:2,
            country: {
                en:'Russia',
                ru:'Россия',
                gr:'Russland',
            },
            capital: {
                en:'Moscow',
                ru:'Москва',
                gr:'Moskau'
            },
            img:'https://cdnimg.rg.ru/img/content/197/76/83/iStock-614724736_d_850.jpg'
        },
        {
            id:3,
            country: {
                en:'Brazil',
                ru:'Бразилия',
                gr:'Brasilien',
            },
            capital: {
                en:'Brasilia',
                ru:'Бразилиа',
                gr:'Brasilia'
            },
            img:'https://www.tourprom.ru/site_media/images/upload/2016/9/2/countryimage/braziliya.jpg'
        },
        {
            id:4,
            country: {
                en:'Great Britain',
                ru:'Великобритания',
                gr:'Großbritannien',
            },
            capital: {
                en:'London',
                ru:'Лондон',
                gr:'London'
            },
            img:'https://cdn21.img.ria.ru/images/155635/45/1556354505_0:477:2000:1602_1920x0_80_0_0_0afea3afd84c951d4ab9fd42bc97224d.jpg'
        },
        {
            id:5,
            country: {
                en:'USA',
                ru:'США',
                gr:'USA',
            },
            capital: {
                en:'Washington',
                ru:'Вашингтон',
                gr:'Washington'
            },
            img:'https://thebell.io/wp-content/uploads/2018/12/1617790_607000759380445_1130267168_o.jpg'
        },
        {
            id:6,
            country: {
                en:'Deutschland',
                ru:'Германия',
                gr:'Germany',
            },
            capital: {
                en:'Berlin',
                ru:'Берлин',
                gr:'Berlin'
            },
            img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-1-Cologne-Cathedral-e1492727734625.jpg'
        },
        {
            id:7,
            country: {
                en:'Australia',
                ru:'Австралия',
                gr:'Australien',
            },
            capital: {
                en:'Canberra',
                ru:'Канберра',
                gr:'Canberra'
            },
            img:'https://rossaprimavera.ru/static/files/fbb556f4c69c.jpg'
        },
        {
            id:8,
            country: {
                en:'France',
                ru:'Франция',
                gr:'Frankreich',
            },
            capital: {
                en:'Paris',
                ru:'Париж',
                gr:'Paris'
            },
            img:'https://tripmydream.cc/travelhub/travel/blocks/20/5779/block_205779.jpg'
        },*/

    ],
    countryAfterInput: [],
    inputValue:'',
    isFetching: false,
}

const CountryCardsReducer = (state = initialState, action) => {

    switch (action.type) {
        case EDIT_INPUT_VALUE: {
            return  {
                ...state,
                inputValue:action.value
            }
        }
        case SET_COUNTRYS_FOR_CARD: {
            return {
                ...state,
                countrysForCard:action.arr
            }

        }
        case EDIT_IS_FETCHING: {
            return {
                ...state,
                isFetching:action.bool
            }
        }

        default: return state
    }
}

export const editArr = (value) => ({type:EDIT_ARR, value})
export const editInputValue = (value) => ({type: EDIT_INPUT_VALUE, value})
const setCountryForCard = (arr) => ({type: SET_COUNTRYS_FOR_CARD, arr})
const IsFetching = (bool) => ({type: EDIT_IS_FETCHING, bool})

export const SetCountryForCardThunk = (lang) => async (dispatch) => {
    try {
        dispatch(IsFetching(true))
        let response = await apiCountry.ownCountryGet(lang)
                if (response.status === 200) {
                    dispatch(setCountryForCard(response.data))
                }
        dispatch(IsFetching(false))
    } catch (err) {
        dispatch(IsFetching(false))
    }



}


export default CountryCardsReducer;