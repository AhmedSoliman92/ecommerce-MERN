import {Container, Ecommerce, Links, Contact, Title, Info, Pages, Center} from './style'
import {LocationOn ,LocalPhone, MailOutline} from '@mui/icons-material';
export default function Footer() {
  return (
    <Container>
        <Ecommerce>
            <Title>
                ECOMMERCE
            </Title>
            <Info>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus sequi, neque quibusdam asperiores beatae ducimus dicta facilis ex unde error dolores architecto odio iure hic corrupti nam dolore ipsum amet laboriosam accusantium exercitationem. Quod illum totam eos quia dicta id expedita cum iusto ab quam deserunt fuga soluta amet saepe iure, quaerat odit odio vel libero enim voluptatibus tenetur, accusantium eum. Quae, quisquam repudiandae nisi earum delectus dolorem libero reiciendis dolores dignissimos facere laboriosam ducimus inventore ullam autem labore amet fuga architecto natus optio ut possimus molestiae! Nisi amet pariatur delectus perspiciatis aliquam rem quas totam quod, alias nesciunt?
            </Info>
        </Ecommerce>
        <Center>
            <Title>
                USEFUL LINKS
            </Title>
            <Links>
                <Pages>
            
                    <Info>
                         MAN FASHION
                    </Info>
                     <Info>
                        ACCESSORIES
                    </Info>
                    <Info>
                        ORDER TRACKING
                    </Info>
                    <Info>
                        WISHLIST
                    </Info>
                </Pages>
                <Pages>
                    <Info>
                        MAN FASHION
                    </Info>
                    <Info>
                        ACCESSORIES
                    </Info>
                    <Info>
                        ORDER TRACKING
                    </Info>
                    <Info>
                        WISHLIST
                    </Info>
                </Pages>
            </Links>
        </Center>
        <Contact>
            <Title>
                CONTACT
            </Title>
            <Links>
                <LocationOn/>
                <Info>
                         1053, Budapest, Kossuth Lajos utca 13
                </Info>
            </Links>
            <Links>
                <LocalPhone/>
                <Info>
                         
                         +36 70 111 1111
                </Info>
            </Links>
            <Links>
                <MailOutline/>
                <Info>
                        
                        contact@contact.com
                </Info>
            </Links>
        </Contact>
    </Container>
  )
}

