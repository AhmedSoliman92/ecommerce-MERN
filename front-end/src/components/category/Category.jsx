import { Container,Categories, CategoryCont, Image, CatTitle, ShopBtn } from './style'

export default function Category() {
  return (
    <Container>
        <Categories>
            <CategoryCont>

                <Image src="/assets/images/13.jpg" alt=""/>
                <CatTitle>
                    coats
                </CatTitle>
                <ShopBtn>shop now
                </ShopBtn>
            </CategoryCont>
            <CategoryCont>

                <Image src="/assets/images/14.jpg" alt=""/>
                <CatTitle>
                    men
                </CatTitle>
                <ShopBtn>shop now
                </ShopBtn>
            </CategoryCont>
            <CategoryCont>

                <Image src="/assets/images/15.jpg" alt=""/>
                <CatTitle>
                    Spring
                </CatTitle>
                <ShopBtn>shop now
                </ShopBtn>
            </CategoryCont>
            <CategoryCont>

                <Image src="/assets/images/16.jpg" alt=""/>
                <CatTitle>
                Jewellery
                </CatTitle>
                <ShopBtn>shop now
                </ShopBtn>
            </CategoryCont>
            <CategoryCont>

                <Image src="/assets/images/17.jpg" alt=""/>
                <CatTitle>
                    Winter
                </CatTitle>
                <ShopBtn>shop now
                </ShopBtn>
            </CategoryCont>
            <CategoryCont>

                <Image src="/assets/images/18.jpg" alt=""/>
                <CatTitle>
                    Glasses
                </CatTitle>
                <ShopBtn>shop now
                </ShopBtn>
            </CategoryCont>
        </Categories>
    </Container>
  )
}
