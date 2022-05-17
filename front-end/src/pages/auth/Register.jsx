import {Container,Wrapper, Auth, Input, TItle, Btn, Span} from './style'

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Auth>
                    <TItle>Register</TItle>
                    <Input placeholder='Username'></Input>
                    <Input placeholder='Email'></Input>
                    <Input placeholder='Password'></Input>
                    <Input placeholder='Confirm Password'></Input>
                    <Btn>Register</Btn>
                    <Span>Have an account? <b>Login</b></Span>
                </Auth>
            </Wrapper>
        </Container>
    );
}

export default Register;
