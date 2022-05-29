import styled from "@emotion/styled";
import AddCircleIcon from '@material-ui/icons/AddCircle';

export const Container = styled.div`
display:flex;
align-items:center;
justify-content: center;
margin:0;
`

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin:50px 0;
position:relative;

`
export const Error = styled.span`
background-color:rgba(255,15,15,0.5);
position:absolute;
right:0;
left:0;
top:-55px;
margin:auto;
text-align:center;
padding:10px;
font-size:14px;
font-family: 'Lato', 'sans-serif';
border-radius:10px;
color:rgba(255,15,15,1.00);

`

export const Img = styled.img`
height:700px;
width:500px;
object-fit:cover;
border-radius:10px
`

export const Input = styled.div`
margin:30px 0;
display:flex;
flex-direction: row;
align-items:center;


`

export const Title = styled.input`
border:none;
border-bottom: 2px solid #999;
color:#444;
flex:1.9;
font-size:18px;
padding:10px 0;
font-family: 'Lato', 'sans-serif';
&:focus{
    outline:none;
}
`
export const Add=  styled(AddCircleIcon)`
color: #1976d2;
flex:0.1;
transform: scale(1.5);
margin-right:10px;
cursor:pointer;

`
export const Submit = styled.button`
font-family: 'Lato', 'sans-serif';
font-size: 20px;
font-weight:600;
background-color:#1976d2 ;
padding: 10px 20px;
margin: 0 150px;
border: none;
border-radius:10px;
color:#fff;
cursor:pointer;
`

