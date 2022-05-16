import Bar from '../../components/bar/Bar';
import Slider from '../../components/slider/Slider';
import Category from '../../components/category/Category';
import Product from '../../components/products/Product';
import News  from '../../components/newsLetter/News';
export default function Home() {
  return (
        <div style={{'overflow': 'hidden'}}>
          <Bar/>
          <Slider/>
          <Category/>
          <Product/>
          <News/>
        </div>
  )
}
