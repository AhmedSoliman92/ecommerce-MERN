import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Bar from '../../components/bar/Bar'
import {Container,Wrapper, Auth, Input, TItle, Btn, Span} from './style'
import {apiCalls} from '../../apiCalls'
import {useSelector, useDispatch} from 'react-redux'
import { CircularProgress } from '@mui/material'

export default function Login() {
  const [username, setUsername]= useState();
  const [password, setPassword]= useState();
  const dispatch = useDispatch();
  const {isFetching,currentUser, error} = useSelector(state=>state.user)
  const navigate =  useNavigate();
  const handleLogin = (e)=>{
    e.preventDefault();
    apiCalls(dispatch,{username, password});
    if (currentUser) {navigate('/')}
  }
  return (
    <>
      <Bar/>
      <Container>
            <Wrapper>
                <Auth>
                    <TItle>Login</TItle>
                    <Input placeholder='Username' onChange={(e)=>setUsername(e.target.value)}></Input>
                    <Input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></Input>
                    {isFetching?<CircularProgress/>:<Btn onClick={handleLogin}>Login</Btn>}
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
