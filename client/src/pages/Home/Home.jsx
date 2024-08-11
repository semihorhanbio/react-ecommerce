import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/FeaturedProducts/Categories'

import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/> 
      <Categories/>     
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home