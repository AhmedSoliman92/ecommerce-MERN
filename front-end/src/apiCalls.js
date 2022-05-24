import axios from "axios"
import { FAILUIRE_LOGIN, START_LOGIN, SUCCESS_LOGIN } from "./redux/userRedux"

export const apiCalls = async(dispatch,user)=>{
    dispatch(START_LOGIN());
    try {
        const res = await axios.post('auth/login',user);
        console.log(res.data)
        dispatch(SUCCESS_LOGIN(res.data));
    } catch (err) {
        console.log(err)
        dispatch(FAILUIRE_LOGIN())
    }
}