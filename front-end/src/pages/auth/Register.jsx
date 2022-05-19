import {Container,Wrapper, Auth, Input, TItle, Btn, Span} from './style'

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Auth>
                    <TItle>Register</TItle>
                    <Input placeholder='Username'></Input>
                    <Input type="email" placeholder='Email'></Input>
                    <Input type="password" placeholder='Password'></Input>
                    <Input type="password" placeholder='Confirm Password'></Input>
                    <Btn>Register</Btn>
                    <Span>Have an account? <b>Login</b></Span>
                </Auth>
            </Wrapper>
        </Container>
    );
}

export default Register;
