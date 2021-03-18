import * as axios from 'axios';

const instance = axios.create({
    baseURL:"https://free.currconv.com/api/v7/convert?&apiKey=91f6ab150da4e3cec50d&compact=ultra&apiKey=91f6ab150da4e3cec50d"
})
//APIkey   91f6ab150da4e3cec50d

export const convertApi = {
    convert(you, out){
        return instance.get(`&q=${you}_${out}`)
    },
}

