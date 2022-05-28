import {Container,Wrapper ,Slide, Image, Arrow,Text, Span, P,Button} from './style'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
export default function Slider() {
  const [slide, setSlide]= useState(1)
  const handleArrow = (dir)=>{
    if(dir==='right'){
      setSlide(slide < 6 ? slide + 1:0);
      
    }
    if(dir==='left'){
      setSlide(slide>0?slide-1:6);

    }
  }
  return (
    <Container>
            <Arrow direction='Left' onClick={()=>handleArrow('left')}>
              <ArrowBackIosIcon />
            </Arrow>
            <Arrow direction='Right' onClick={()=>handleArrow('right')}>
             <ArrowForwardIosIcon/>
            </Arrow>
        <Wrapper slide={slide}>

          <Slide>
            <Image id='1' src='/assets/images/4.jpg'/>
            
            <Text>
              <Span>
                  new discount
              </Span>
              <P>
                don't miss the opportunity to get what you need.
              </P>
              <Button> shop noew</Button>
            </Text>
          </Slide>
          <Slide>
            <Image id='2' src='/assets/images/1.jpg'/>
            <Text>
              <Span>
                  new discount
              </Span>
              <P>
                don't miss the opportunity to get what you need.
              </P>
              <Button> shop noew</Button>
            </Text>
          </Slide>
          <Slide>
            <Image id='2' src='/assets/images/3.jpg'/>
            <Text>
              <Span>
                  new discount
              </Span>
              <P>
                don't miss the opportunity to get what you need.
              </P>
              <Button> shop noew</Button>
            </Text>
          </Slide>
          <Slide>
            <Image id='2' src='/assets/images/2.jpg'/>
            <Text>
              <Span>
                  new discount
              </Span>
              <P>
                don't miss the opportunity to get what you need.
              </P>
              <Button> shop noew</Button>
            </Text>
          </Slide>
          <Slide>
            <Image id='2' src='/assets/images/5.jpg'/>
            <Text>
              <Span>
                  new discount
              </Span>
              <P>
                don't miss the opportunity to get what you need.
              </P>
              <Button> shop noew</Button>
            </Text>
          </Slide>
          <Slide>
            <Image id='2' src='/assets/images/6.jpg'/>
            <Text>
              <Span>
                  new discount
              </Span>
              <P>
                don't miss the opportunity to get what you need.
              </P>
              <Button> shop noew</Button>
            </Text>
          </Slide>
          <Slide>
            <Image id='2' src='/assets/images/7.jpg'/>
            <Text>
              <Span>
                  new discount
              </Span>
              <P>
                don't miss the opportunity to get what you need.
              </P>
              <Button> shop noew</Button>
            </Text>
          </Slide>
        </Wrapper>
    </Container>
  )
}
