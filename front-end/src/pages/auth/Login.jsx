import { Link } from 'react-router-dom'
import {Container,Wrapper, Auth, Input, TItle, Btn, Span} from './style'

export default function Login() {
  return (
    <Container>
            <Wrapper>
                <Auth>
                    <TItle>Login</TItle>
                    <Input placeholder='Username'></Input>
                    <Input type="password" placeholder='Password'></Input>
                    <Btn>Login</Btn>
                    <Span>Don't have an account?
                        <Link style={{'text-decoration': 'none'}} to= '/register'> 
                          <b> Register</b>
                        </Link>
                    </Span>
                </Auth>
            </Wrapper>
        </Container>
  )
}
