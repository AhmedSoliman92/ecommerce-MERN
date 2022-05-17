
import Product from "../../components/products/Product";
import {H1,FilterContainer, Filter, Select,Option, Span} from './style'
const Category = () => {
    return (
        <>
            
            <H1>Dresses</H1>
            <FilterContainer>
                <Filter>
                    <Span>
                        Filter Product: 
                    </Span>
                    <Select>
                        <Option value="" selected disabled hidden>Color</Option>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                    </Select>
                    <Select>
                        <Option value="" selected disabled hidden>Size</Option>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                    </Select>

                </Filter>
                <Filter>
                    <Span>
                        Sort Product: 
                    </Span>
                    <Select>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                        <Option>ddddd</Option>
                    </Select>
                    

                </Filter>
            </FilterContainer>
            <Product/>
        </>
    );
}

export default Category;
