import {Container,Wrapper, Auth, Input, TItle, Btn, Span} from './style'
import Bar from '../../components/bar/Bar'
import Footer from "../../components/footer/Footer";
import { useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const username= useRef();
    const email= useRef();
    const password= useRef();
    const confirmPassword= useRef();
    const navigate = useNavigate()
    const handleRegister = async(e)=>{
        e.preventDefault();
        if (password.current.value !== confirmPassword.current.value){
            confirmPassword.current.setCustomValidity('Passwords are not match')
        }else{
            const newUser={
                username:username.current.value,
                email: email.current.value,
                password:password.current.value,
            }
            try {
                const res = await axios.post('auth/register', newUser);
                navigate('/login');
            } catch (err) {
                console.log(err);
            }
        }
        
    }
    return (
        <>
            <Bar/>
            <Container>
            <Wrapper>
                <Auth onSubmit={handleRegister}>
                    <TItle>Register</TItle>
                    <Input placeholder='Username' ref={username} required></Input>
                    <Input type="email" placeholder='Email' ref={email} required></Input>
                    <Input type="password" placeholder='Password' ref={password} required></Input>
                    <Input type="password" placeholder='Confirm Password' ref={confirmPassword} required></Input>
                    <Btn type='submit'>Register</Btn>
                    <Span>Have an account?
                        <Link style={{'text-decoration': 'none'}} to= '/login'>
                        <b> Login</b>
                        </Link>
                    </Span>
                </Auth>
            </Wrapper>
        </Container>
        <Footer/>
        </>
    );
}

export default Register;
