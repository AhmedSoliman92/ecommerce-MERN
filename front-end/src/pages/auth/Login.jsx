import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Bar from '../../components/bar/Bar'
import {Container,Wrapper, Auth, Input, TItle, Btn, Span, Warning} from './style'
import {useSelector, useDispatch} from 'react-redux'
import { CircularProgress } from '@mui/material'
import { FAILUIRE_LOGIN, START_LOGIN, SUCCESS_LOGIN } from "../../redux/userReducer"
import { normalRequest } from '../../apiCalls'
export default function Login() {
  const [username, setUsername]= useState();
  const [password, setPassword]= useState();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {isFetching, error} = useSelector(state=>state.user)
  const handleLogin = async(e)=>{
    e.preventDefault();
    dispatch(START_LOGIN());
    try {
      const res = await normalRequest.post('auth/login',{username,password});
      console.log(res.data)
      dispatch(SUCCESS_LOGIN(res.data));
      navigate('/')
  } catch (err) {
      dispatch(FAILUIRE_LOGIN(err.response.data))
  }

  }
  return (
    <>
      <Bar/>
      <Container>
            <Wrapper>
                <Auth>
                  {error?<Warning>{error}</Warning>:''}
                    <TItle>Login</TItle>
                    <Input placeholder='Username' onChange={(e)=>setUsername(e.target.value)}></Input>
                    <Input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></Input>
                   <Btn onClick={handleLogin} > {isFetching?<CircularProgress style={{'color':'white', 'height':'20px', 'width':'20px' ,'padding':' 0 20px'}}/>:'Login'}</Btn>
                    <Span>Don't have an account?
                        <Link style={{textDecoration: 'none'}} to= '/register'> 
                          <b> Register</b>
                        </Link>
                    </Span>
                </Auth>
            </Wrapper>
        </Container>
    </>
  )
}
