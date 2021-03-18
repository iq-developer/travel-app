import * as axios from 'axios';


const instance = axios.create({
    baseURL:"https://dzianiskor-travel-app-server.herokuapp.com/api/"
})
export const apiCountry = {
    ownCountryGet(lang) {
        return instance.get(`countries?lang=${lang}`)
    },
    countryPage(lang, id) {
        return instance.get(`countries/${id}?lang=${lang}`)
    }
}

export const apiLogin = {
    login(data) {
        return instance.post(`auth/login`, data)
    },
    register(data) {
        return instance.post(`auth/register`, data)
    }
}

