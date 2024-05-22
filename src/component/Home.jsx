import React, { useEffect, useState } from 'react'
import bg_home from '../assets/bg-main-home.jpg'
// import dining from '../assets/driving.png';
// import living from '../assets/living.png';
// import bedroom from '../assets/bedroom.png';
// import CategoryCard from './CategoryCard'
import inner_img from '../assets/inner_img.png'
import inner_img_1 from '../assets/inner_img_1.png'
import inner_1 from '../assets/inner_1.png'
import inner_2 from '../assets/inner_2.png'
import inner_3 from '../assets/inner_3.png'
import inner_4 from '../assets/inner_4.png'
import inner_5 from '../assets/inner_5.png'
import inner_6 from '../assets/inner_6.png'
import inner_7 from '../assets/inner_7.png'
import inner_8 from '../assets/inner_8.png'
import inner_9 from '../assets/inner_9.png'
import Title from './Title'
import './Home.css'
import Product from './Product';
import axios from 'axios';

const BackUrl = 'https://test-ecommerce-gamma.vercel.app/categories'

const Home = () => {
  const [form, setForm] = useState({ cards: [] })

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(BackUrl);
      setForm(response.data)
    };
    getCategories()
  }, [])

  return (
    <div>
      <section>
        <div className='bg_home_section'>
          <img className='bg_home_img' src={bg_home} alt="" />
            <div className='cart-pink'>
              <p className='cart_pink_p_1'>New Arrival</p>
              <h2 className='cart_pink_h2'>Discover Our <br />New Collection</h2>
              <p className='cart_pink_p_lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br /> elit tellus, luctus nec ullamcorper mattis.</p>
              <button>BUY Now</button>
            </div>
        </div>
        <div></div>
      </section>
      <section>
        <div className='container'>
          <Title title='Browse The Range' subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          <div className='card_home_father'>
              
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
              <Product />
        </div>
      </section>
      <section>
        <div className='container'>
            <div className='cta_father'>
              <div className='cta'>
                <h2>50+ Beautiful rooms <br />inspiration</h2>
                <p>Our designer already made a lot of beautiful<br /> prototipe of rooms that inspire you</p>
                <button>Explore More</button>
              </div>
              <div className='cta_inner'>
                <img className='cta_img' src={inner_img} alt="" />
                <img className='cta_img_1' src={inner_img_1} alt="" />
              </div>
            </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div>
            <div className='funiro'>
              <p>Share your setup with</p>
              <b>#FuniroFurniture</b>
            </div>
            <div className='inner_card'>
              <img className='inner_1' src={inner_1} alt="" />
              <img className='inner_2' src={inner_2} alt="" />
              <img className='inner_3' src={inner_3} alt="" />
              <img className='inner_4' src={inner_4} alt="" />
              <img className='inner_5' src={inner_5} alt="" />
              <img className='inner_6' src={inner_6} alt="" />
              <img className='inner_7' src={inner_7} alt="" />
              <img className='inner_8' src={inner_8} alt="" />
              <img className='inner_9' src={inner_9} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home