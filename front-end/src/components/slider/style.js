import styled from "@emotion/styled";

// container
export const Container = styled.div`
margin-top:10px;
height: calc(100vh - 90px);
width:99vw;
overflow:hidden;
display:flex;
flex-direction:row;
font-family: 'Lato', sans-serif;
position: relative;



`
//wrapper
export const Wrapper = styled.div`
display: flex;
width:98vw;
flex:1;
transform:translateX(-${props => props.slide * 100}vw);
transition: all 1.2s ease;

`

//slide

export const Slide=styled.div`
display:flex;
width:100vw;
align-items:center;

`
export const Image = styled.img`
height:100%;
width: 70vw;
object-fit:cover;
`

export const Arrow= styled.div`
height: 50px;
width: 50px;
background-color:#E5E5E5;
border-radius:50%;
position:absolute;
top:0;
bottom: 0;
margin:auto;
display:flex;
align-items:center;
justify-content:center;
left:${props=> props.direction==='Left' && '10px'};
right:${props=> props.direction ==='Right' && '10px'};
cursor:pointer;
z-index:999;
&:hover{
    transform: scale(2);
    background-color:transparent;   
}
`
export const Text = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
width: 30vw;
padding:0 30px;

`
export const Span=styled.span`
text-transform: uppercase;
font-size: 35px;
margin-bottom:20px;
font-weight:900;
`
export const P=styled.p`
text-transform: uppercase;
font-size: 18px;
letter-spacing:3px;
margin-bottom:70px;
`
export const Button= styled.button`
text-transform: uppercase;
background: transparent;
font-size:25px;
font-weight:600;
padding: 10px 20px;
cursor: pointer;
border: 2px solid black;
`