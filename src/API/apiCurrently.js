import * as axios from 'axios';


export const apiCurrently = {
    bel(ISO) {
       return axios.get(`https://www.nbrb.by/api/exrates/rates/${ISO}?parammode=2`)
    }
}