import Bar from '../../components/bar/Bar';
import Slider from '../../components/slider/Slider';
import Category from '../../components/category/Category';
import Product from '../../components/products/Product';
export default function Home() {
  return (
        <div style={{'overflow': 'hidden'}}>
          <Bar/>
          <Slider/>
          <Category/>
          <Product/>
        </div>
  )
}
