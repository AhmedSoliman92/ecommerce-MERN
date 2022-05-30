import styled from '@emotion/styled/macro';


export const Container = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
margin: 0 50px;
padding:0 50px;
justify-content:center;
`

export const ProCont = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
margin-left:15px;
flex:1;
`

export const Hover = styled.div`
background-color:rgba(189, 195, 199,0);
position:absolute;
display:flex;
align-items:center;
justify-content:center;
top:550px;
height:0;
width: 396px;
z-index:1;

`
export const Products = styled.div`
position: relative;
display:flex;
justify-content: center;
align-items: center;
margin:20px 11px;

&:hover ${Hover}{
        z-index:1;
        background-color:rgba(189, 195, 199,0.4);
        height: 550px;
        top:0;
        transition: all 0.5s ease;
        *>*{
            background-color:rgba(255,255,255, 1);
            color:rgba(0,0,0,1);
        }
    }
`

export const Image = styled.img`
height:550px;
width: 396px;
object-fit:cover;
`

export const Icons = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size:55px;
`

export const Icon = styled.div`
background-color:rgba(255,255,255, 0);
color:rgba(0,0,0,0);
height: 75px;
width: 75px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
margin: 0 10px;
cursor:pointer;
&:hover {
                transform:scale(1.2);
            }
*{
    
    font-size: 0.8em;
    
}
`