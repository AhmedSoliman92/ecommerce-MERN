import styled from "@emotion/styled";

export const Container= styled.div`
display:flex;
flex-direction:column;
width:97vw;
justify-content:center;

font-family: 'Lato', sans-serif;
margin-top:30px;

`

export const Wrapper= styled.div`

display:flex;
flex-direction:column;
justify-content:center;
margin:0 50px;
`


export const Title= styled.span`
font-size:30px;
margin-bottom: 50px;
text-align: center;
font-family: 'Lato', sans-serif;
letter-spacing: 1px;
`
export const Btns= styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;
padding:0 20px;
margin-bottom:30px;
`
export const Btn= styled.button`
margin-right:20px;
margin-bottom:30px;
padding: 10px 40px;
font-size:16px;
font-weight: 600;
background-color:rgba(50, 50, 50,1);
border:none;
color:#fff;
cursor: pointer;
`
export const NumItems= styled.span`
margin-right:20px;
margin-bottom:30px;
`


export const Cart= styled.div`
display:flex;
justify-content:space-between;
margin-bottom:30px;
flex-wrap: wrap;

`

export const Products= styled.div`
flex:3;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;


`

export const Left= styled.img`
height:auto;
width: 150px;
object-fit:cover;

`


export const Center= styled.span`
display:flex;
flex-direction:row;
justify-content:space-between;
padding:10px 0;
flex-wrap:wrap;
font-family: 'Lato', sans-serif;
border-bottom: 2px solid #aaa;
`
export const CenterLeft= styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
margin:20px;
flex:2;
`
export const Color = styled.div`
height: 25px;
width: 25px;
border-radius:50%;
background-color:#aaa;
margin-right:5px;
cursor:pointer;

`
export const CenterRight= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
flex:1;
`
export const Count = styled.div`
display:flex;

align-items:center;
justify-content:center;
*{
    cursor: pointer;
}


`
export const Price = styled.span`
font-size: 40px;
margin:30px 0 20px 0;
`
export const Span= styled.span`
align-items:center;
font-family: 'Lato', sans-serif;
`

export const Summary= styled.div`
flex:1;
display:flex;
flex-direction: column;
justify-content: space-around;
border: 2px solid #aaa;
padding: 20px 0px;

`
export const SummaryCols = styled.div`
display:flex;
flex:2;
justify-content: space-around;

`

export const SumInfo= styled.div`
display:flex;
flex-direction: column;
justify-content: space-around;


`
export const Cost = styled.span`

font-family: 'Lato', sans-serif;
font-size: 18px;

`