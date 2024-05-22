import bg_img from '../assets/cart_bg_img.png'
import imgCart from '../assets/cartPage_img.png'
import imgCartDelete from '../assets/delete.png'
import kubok from '../assets/kubok.png';
import galochka from '../assets/galochka.png';
import podarok from '../assets/podarok.png';
import call from '../assets/imgcall.png';
import './Cart.css'

const Cart = () => {
  return (
    <div>
      <section>
        <img src={bg_img} alt="" />
      </section>
      <section className='cart_shop_two'>
        <div>
          <div>
            <div className='cart_div_one'>
              <p className='one_p'>Product</p>
              <p>Price</p>
              <p className='two_p'>Quantity</p>
              <p>Subtotal</p>
            </div>
            <div></div>
          </div>
          <div className='cart_about_style'>
            <img src={imgCart} alt="" />
            <p className='p_color_gray p_two_el'>Asgaard sofa</p>
            <p className='p_color_gray'>Rs. 250,000.00</p>
            <button>1</button>
            <p className='p_color_black'>Rs. 250,000.00</p>
            <img className='deleteImg' src={imgCartDelete} alt="" />
          </div>
        </div>
        <div className='cart_shop'>
          <h2>Cart Totals</h2>
          <div className='totalPrice'>
            <p className='total_p_one'>Subtotal <span>Rs. 250,000.00</span></p>
            <p className='total_p_two'>Total <span>Rs. 250,000.00</span></p>
          </div>
          <button>Check Out</button>
        </div>
      </section>
      <section>
        <div className='card_img_father'>
          <div className='card_img_h2'>
            <div>
              <img src={kubok} alt="" />
            </div>
            <div>
              <h2>High Quality</h2>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className='card_img_h2'>
            <div>
              <img src={galochka} alt="" />
            </div>
            <div>
              <h2>Warranty Protection</h2>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className='card_img_h2'>
            <div>
              <img src={podarok} alt="" />
            </div>
            <div>
              <h2>Free Shipping</h2>
              <p>Order over 150 $</p>
            </div>
          </div>
          <div className='card_img_h2'>
            <div>
              <img src={call} alt="" />
            </div>
            <div>
              <h2>24 / 7 Support</h2>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Cart
