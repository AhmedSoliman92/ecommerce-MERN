import { Container,Wrapper, Title, Span, Email, Input, Btn } from "./style";
import {PlayArrow} from '@mui/icons-material';
const News = () => {
    return (
        <Container>
        <Wrapper>

            <Title>NewsLetter</Title>
            <Span>
                Get timely updates from your favorite products
            </Span>
            <Email>
                <Input/>
                <Btn>
                    <PlayArrow/>
                </Btn>
            </Email>
        </Wrapper>
        </Container>
    );
}

export default News;
