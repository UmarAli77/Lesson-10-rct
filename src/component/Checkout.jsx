import React, { useState } from 'react'
import './Checkout.css'
import './Cart.css'
import bg_img from '../assets/checkout_bg_img.png'
import kubok from '../assets/kubok.png';
import galochka from '../assets/galochka.png';
import podarok from '../assets/podarok.png';
import call from '../assets/imgcall.png';
import { toast } from 'react-toastify';

const Checkout = () => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    companyName: '',
    region: '',
    streetAdres: '',
    city: '',
    province: '',
    zipCode: '',
    phone: '',
    email: '',
})
const Change = (ex) => {
  setForm({
    ...form,
    [ex.target.name]: ex.target.value
  })
}
const Click = () => {
  toast(`Hi: ${form.name}`)
}
return (
  <div>
    <section>
      <img src={bg_img} alt="" />
    </section>
    <section className='otherFather'>
      <div>
        <div className='inputFather'>
          <h2>Billing details</h2>
          <label htmlFor="surname">Last Name</label>
          <label className='oneInput' htmlFor="name">First Name</label><br />
          <input className='nameInput' type="text" value={form.name} onChange={Change} name="name" id="name" />
          <input  className='surnameInput' value={form.surname} onChange={Change} type="text" name="surname" id="surname" /><br />
          <label htmlFor="companyName">Company Name (Optional)</label><br />
          <input className='companyInput' value={form.companyName} onChange={Change} type="text" name='companyName' id='companyName' /><br />
          <label htmlFor="region">Country / Region</label><br />
          <select className='regionInput' value={form.region} onChange={Change} name="region" id="region">
            <option value="1">Sri Lanka</option>
          </select><br />
          <label htmlFor="streetAdres">Street Address</label><br />
          <input className='companyInput' value={form.streetAdres} onChange={Change} type="text" name="streetAdres" id="streetAdres" /><br />
          <label htmlFor="city">Town / City</label><br />
          <input className='companyInput' value={form.city} onChange={Change} type="text" name="city" id="city" /><br />
          <label htmlFor="province">Province</label><br />
          <select className='regionInput' value={form.province} onChange={Change} name="province" id="province">
            <option value="1">Western Province</option>
          </select><br />
          <label htmlFor="zipCode">ZIP code</label><br />
          <input className='companyInput' value={form.zipCode} onChange={Change}  type="text" name='zipCode' id='zipCode' /><br />
          <label htmlFor="phone">Phone</label><br />
          <input className='companyInput' value={form.phone} onChange={Change}  type="text" name='phone' id='phone' /><br />
          <label htmlFor="email">Email address</label><br />
          <input className='companyInput' value={form.email} onChange={Change} type="text" name='email' id='email' />
        </div>
      </div>
      <div>
      <div className='about_GrandFather'>
        <div className='about_Father'>
          <div className='about'>
            <h2>Product</h2>
            <p className='pAndSpan'>Asgaard sofa <span>x 1</span></p>
            <p className='p_two'>Subtotal</p>
            <p className='p_two'>Total</p>
          </div>
          <div className='about_tywo'>
            <h2>Subtotal</h2>
            <p className='p_RS'>Rs. 250,000.00</p>
            <p className='p_RS'>Rs. 250,000.00</p>
            <p className='p_Rs_orange'>Rs. 250,000.00</p>
          </div>
        </div>
      </div>
      <div className='grandFather_child'>
        <hr />
        <ul>
          <li className='black_li'>Direct Bank Transfer</li>
          <p className='p_Grand'>Make your payment directly into our bank account. Please use<br />
          your Order ID as the payment reference. Your order will not be<br />
          shipped until the funds have cleared in our account.</p>
          <li className='gray_li'>Direct Bank Transfer</li>
          <li className='gray_li'>Cash On Delivery</li>
          <p className='grand_p_two'>Your personal data will be used to support your experience<br />
          throughout this website, to manage access to your account, and<br />
          for other purposes described in our <span>privacy policy.</span></p>
          <button type='button' onClick={Click}>Place order</button>
        </ul>
      </div>
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
export default Checkout;