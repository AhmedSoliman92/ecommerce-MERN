import styled from "@emotion/styled";

export const Container = styled.div`
display:flex;
margin: 50px 50px 50px 75px;
padding:0 50px;
justify-content: center;

`
export const Wrapper = styled.div`
max-width:100vw;
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
font-family: 'Lato', sans-serif;
margin: 50px 50px 50px 75px;
padding:0 50px;
`
export const Image = styled.img`
flex: 1;
max-width:50vw;
max-height:90vh;
object-fit:cover;
margin-right:40px;
margin-bottom:15px;
`
export const Info = styled.div`
flex: 1.5;
max-width:60vw;
display:flex;
flex-direction: column;
`
export const Title = styled.span`
font-size: 30px;
margin-bottom:40px;
`
export const Desc = styled.span`
font-size: 18px;
margin-bottom:40px;
`

export const Price = styled.span`
font-size: 40px;

margin-bottom:40px;
`
export const DIV = styled.div`
display:flex;
flex-wrap:wrap;
margin-bottom:50px;


`
export const Filter = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-right:80px;
margin-bottom:15px;
*{
    cursor: pointer;
}


`
export const Color = styled.div`
height: 25px;
width: 25px;
border-radius:50%;
background-color:${props=> props.color};
margin-right:5px;
cursor:pointer;

`
export const Text = styled.div`
margin-right:10px;
font-size: 22px;
`

export const Select= styled.select`
font-size:20px;
margin:15px ;
padding:10px 20px;

`
export const Option= styled.option`
font-size:20px;
padding:15px;
`

export const Input = styled.span`
width: 25px;
height: 25px;
border: 1px solid #444;
border-radius:10px;
text-align:center;
font-weight:600;


`
export const Btn = styled.button`

border: 1px solid #444;
background-color: transparent;
border-radius:10px;
text-align:center;
font-size: 20px;
font-weight:600;
padding: 10px 20px;
cursor: pointer;
font-family: 'Lato', sans-serif;

`