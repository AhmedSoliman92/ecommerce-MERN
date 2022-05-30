import axios from "axios"
import {store} from './redux/store'
import jwtDecode from "jwt-decode"
import { UPDATE_TOKEN } from "./redux/userReducer"
const URL = 'http://localhost:3500/'
export const normalRequest = axios.create({
    baseURL:URL
})
const getData=()=>{
    
    let currentUser = store.getState().user.currentUser
    return currentUser
}
const getRefreshToken = async()=>{
    const res = await normalRequest.post('refresh',{id:getData()['_id'],token:getData()['refreshToken']});
    return res.data
}
 
export const userRequest = axios.create(
{
    baseURL:URL
}
);

userRequest.interceptors.request.use(
    async(config)=>{

        let timeNow= new Date();
        if(jwtDecode('Bearer ' +getData()['accessToken']).exp * 1000 < timeNow.getTime() ){
            const data = await getRefreshToken();
            config.headers.token= "Bearer " + data.accessToken;

            const currentUser={
                    ...getData(),
                    accessToken:data.accessToken,
                    refreshToken:data.refreshToken
                }
            

            store.dispatch(UPDATE_TOKEN(currentUser))
            return config;
        }
        config.headers.token= "Bearer " + getData()['accessToken']
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }
)