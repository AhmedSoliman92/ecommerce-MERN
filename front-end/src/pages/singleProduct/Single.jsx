import Bar from '../../components/bar/Bar'
import {Container, Wrapper,Image, Info, Title, Desc, Price,DIV, Filter, Color,Text, Option, Select, Input, Btn} from './style'
import Footer from '../../components/footer/Footer'
import {Remove, Add} from '@mui/icons-material';
export default function Single() {
  return (
      <>

        <Bar/>
        <Container>
            <Wrapper>
                <Image src='/assets/images/33.jpg'/>
                <Info>
                    <Title>T-shirt</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perferendis aliquid vel soluta totam? Explicabo, accusantium odit. Voluptatem ipsam optio vero nemo dolor repellat in corrupti? Tenetur dolores explicabo a rerum eos ratione! Officia deleniti tempore nobis ratione, ab voluptatibus consequatur sint quasi perspiciatis aut veritatis eligendi, laudantium voluptatum accusantium!
                    </Desc>
                    <Price>50 $</Price>
                    <DIV>
                        <Filter>
                            <Text>Color</Text>
                            <Color color={"red"} />
                            <Color color={"blue"}/>
                            <Color color={"green"}/>
                            
                        </Filter>
                        <Filter>
                        <Text>Size </Text>
                        <Select>
                        <Option>XXS</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                        </Filter>
                    </DIV>
                    <DIV>
                        <Filter>
                        <Remove/>
                            <Input>4</Input>
                        <Add/>
                        </Filter>
                        <Btn>Add To Cart</Btn>
                    </DIV>
                </Info>
            </Wrapper>
        </Container>
        <Footer/>
      </>
  )
}
