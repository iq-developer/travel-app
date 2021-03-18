import * as axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/"
})
//appid=b81543affaecbb62ec96a57263178ff4

export const weatherApi = {
    byCityName(city, lang){
        return instance.get(`weather?q=${city}&units=metric&lang=${lang}&appid=b81543affaecbb62ec96a57263178ff4`)
    },
}