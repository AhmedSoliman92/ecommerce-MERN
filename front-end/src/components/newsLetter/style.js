import styled from "@emotion/styled";


export const Container = styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
margin-top: 50px;

align-items:center;
background-color:rgba(236, 236, 236,1);
`

export const Wrapper = styled.div`
display:flex;
flex-direction: column;
margin-bottom:50px;
align-items:center;
padding:20px;

`
export const Title= styled.div`
font-size:60px;
font-weight: 900;
font-family: 'Lato', sans-serif;
margin-bottom:20px;
`


export const Span = styled.span`
font-family: 'Lato', sans-serif;
font-size:20px;
margin-bottom:50px;
`

export const Email = styled.div`
display:flex;
flex-direction: row;

width:100%;
`

export const Input = styled.input`
width:100%;
height:40px;
font-size:21px;
font-family: 'Lato', sans-serif;
`

export const Btn = styled.div`
background-color: black;
color:#fff;
height: 40px;
width: 40px;
padding:3px;
display:flex;
align-items:center;
justify-content:center;
*{
    font-size:40px;
}

`