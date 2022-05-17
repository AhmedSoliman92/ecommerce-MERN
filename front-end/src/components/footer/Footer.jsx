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

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odit, reiciendis unde minus similique exercitationem dolor odio blanditiis ipsa corporis quod porro animi sequi, ea in nobis totam. Alias, dolorem?
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

