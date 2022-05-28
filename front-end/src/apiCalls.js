import axios from "axios"


const URL = 'http://localhost:3500/'


export const normalRequest = axios.create({
    baseURL:URL
})


export const userRequest = axios.create({
    baseURL:URL
})