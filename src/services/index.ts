import axios  from "axios";



const $api = axios.create({
    withCredentials : false,
    baseURL : "https://hack.invest-open.ru/"
})

export default $api;