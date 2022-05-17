import styled from "@emotion/styled";


export const Container = styled.div`
height: 60px;
display: flex;
flex-wrap:wrap;
justify-content: space-between;
font-family: 'Lato', sans-serif;
padding:10px 20px;


`
//left bart
export const Left = styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:20px;
`
//language
export const Language = styled.div`
font-size: 18px;
font-weight: 600;
margin-right:20px;
`
// search
export const Search= styled.div`
display:flex;
border: 1px solid #999;
padding:10px;
align-items:center;
`
// search input
export const Input= styled.input`
background-color:transparent;
border:none;
font-size:18px;
&:focus{
    outline:none;
}


//center
`
export const Center = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
font-weight:900;
margin-right:50px;
margin-bottom:20px;

`

//Right

export const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content:center;
margin-bottom:20px;
`

export const Span=styled.span`
margin-right: 20px;

`