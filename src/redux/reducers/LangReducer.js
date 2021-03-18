const EDIT_LANGUAGE = 'EDIT_LANGUAGE/LangReducer'

const initialState = {
    lang: 'Русский'
}

const LangReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_LANGUAGE: {
            return {
                ...state,
                lang: action.lang
            }
        }
        default: return state
    }
}

export const editLang = (lang) => ({type: EDIT_LANGUAGE, lang})

export default LangReducer;