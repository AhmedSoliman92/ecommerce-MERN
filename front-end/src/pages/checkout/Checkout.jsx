import {Container,Wrapper,Title,Btns,Products, Cart, Left,Center, SumInfo,Summary, Btn, NumItems, Span, CenterLeft, CenterRight, Color, Count, Price, Cost,SummaryCols} from './style'
import {Remove, Add} from '@mui/icons-material';
import Bar from '../../components/bar/Bar';
export default function Checkout() {
  return (
    <>
        <Bar/>
        <Container>
        <Wrapper>
                <Title>Shopping Cart</Title>
                <Btns>
                    <Btn theme="light">Continue Shopping</Btn>
                    <NumItems>
                    <NumItems>Shopping Bag(4)</NumItems>
                    <NumItems>Your Wishlist(0)</NumItems>
                    </NumItems>
                    <Btn theme="dark">Checkout Now</Btn>
                </Btns>
                <Cart>
                    <Products>
                            
                            <Center>
                                <Left src='/assets/images/7.jpg'/>
                                <CenterLeft>

                                <Span>
                                    <b>Product</b> Black hat
                                </Span>
                                <Span>
                                    <b>ID</b> Black hat
                                </Span>
                                <Span>
                                    <Color/>
                                </Span>
                                <Span>
                                    <b>Size</b> Black hat
                                </Span>
                                </CenterLeft>
                                <CenterRight>
                                    <Count>
                                        <Remove/>
                                            <b>4</b>
                                        <Add/>
                                        
                                    </Count>
                                    <Price>50 $</Price>
                                </CenterRight>
                            </Center>
                            <Center>
                                <Left src='/assets/images/7.jpg'/>
                                <CenterLeft>

                                <Span>
                                    <b>Product</b> Black hat
                                </Span>
                                <Span>
                                    <b>ID</b> Black hat
                                </Span>
                                <Span>
                                    <Color/>
                                </Span>
                                <Span>
                                    <b>Size</b> Black hat
                                </Span>
                                </CenterLeft>
                                <CenterRight>
                                    <Count>
                                        <Remove/>
                                            <b>4</b>
                                        <Add/>
                                        
                                    </Count>
                                    <Price>50 $</Price>
                                </CenterRight>
                            </Center>

                        
                    </Products>
                    <Summary>
                        <Title>ORDER SUMMARY</Title>
                        <SummaryCols>
                            <SumInfo>
                                <Cost>Subtotal</Cost>
                                <Cost>Estimated Shipping</Cost>
                                <Cost>Shipping Discount</Cost>
                                <Cost><b>Total</b></Cost>
                            </SumInfo>
                            <SumInfo>
                                <Cost>$ 82</Cost>
                                <Cost>$ 6</Cost>
                                <Cost>$ 4</Cost>
                                <Cost><b>84</b></Cost>
                        </SumInfo>
                        </SummaryCols>
                    </Summary>
                </Cart>
        </Wrapper>
    </Container>
    </>
  )
}

