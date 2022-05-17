import {Container,Wrapper, Auth, Input, TItle, Btn, Span} from './style'

export default function Login() {
  return (
    <Container>
            <Wrapper>
                <Auth>
                    <TItle>Login</TItle>
                    <Input placeholder='Username'></Input>
                    <Input placeholder='Password'></Input>
                    <Btn>Login</Btn>
                    <Span>Don't have an account? <b>Register</b></Span>
                </Auth>
            </Wrapper>
        </Container>
  )
}
