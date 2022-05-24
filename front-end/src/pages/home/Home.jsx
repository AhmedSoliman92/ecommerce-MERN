
import Slider from '../../components/slider/Slider';
import Category from '../../components/category/Category';
import Product from '../../components/products/Product';
import News  from '../../components/newsLetter/News';
import Bar from '../../components/bar/Bar';
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
