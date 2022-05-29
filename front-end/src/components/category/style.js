import styled from "@emotion/styled";


export const Container= styled.div`
width: 100vw;
margin-top:150px;
display:flex;
justify-content:center;
margin-bottom: 20px;



`


export const Categories = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
margin: 0 50px;
padding:0 50px;
`

export const CategoryCont = styled.div`
position: relative;
display:flex;
justify-content: center;
align-items: center;
margin:20px 5px;
flex: 1 1 30%;
`

export const Image = styled.img`
height:700px;
width: 500px;
object-fit:cover;
`


export const CatTitle = styled.span`
font-size:50px;
font-weight: 900;
position: absolute;
margin: auto;
right:0;
left:0;
margin-bottom: 80px;
font-family: 'Lato', sans-serif;
text-align:center;
color: #fff;
letter-spacing:2px;
text-transform:uppercase;
`

export const ShopBtn = styled.button`
border: none;
position: absolute;
text-transform:uppercase;
font-family: 'Lato', 'sans-serif';
font-weight:600;
right:0;
left:0;
top:${props=> props.check==='edit'?'340px':props.check==='delete'?'390px':'290px'};
margin:auto;
padding: 10px 15px;
margin-top:80px;
width: 40%;
cursor: pointer;

`