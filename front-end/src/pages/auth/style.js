import styled from "@emotion/styled";

export const Container = styled.div`
width: 100vw;
display:flex;
justify-content:center;
align-items:center;
`

export const Wrapper = styled.div`
height: 100vh;
display:flex;
justify-content:center;
align-items:center;

`
export const Auth = styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
font-family: 'Lato', 'sans-serif';

padding: 40px 80px;
border-radius:10px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;`


export const TItle = styled.span`
font-size: 30px;
font-weight: 900;
margin-bottom: 30px;


`

export const Input = styled.input`
border:none;
background-color:transparent;
border-bottom: 2px solid #999;
font-size: 20px;
padding:10px 20px;
margin-bottom: 15px;
font-family: 'Lato', sans-serif;
font-size: 20px;

&:focus{
    outline:none;
}
`


export const Btn = styled.button`
margin:30px 0;
background-color:#1976d2;
border:none;
padding:10px 20px;
border-radius:10px;
font-size: 20px;
font-weight: 600;
color: #fff;
cursor:pointer;

`
export const Span = styled.span`
*{
    color:#1976d2;
    cursor: pointer;
}
`

