import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './About.css'
import './Cart.css'
import logoContact from '../assets/conact.bg.png'
import imgLoca from '../assets/location.png'
import callIcon from '../assets/call-icon.png';
import timeIcon from '../assets/time.png';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import kubok from '../assets/kubok.png';
import galochka from '../assets/galochka.png';
import podarok from '../assets/podarok.png';
import call from '../assets/imgcall.png';

const About = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', messega: '' })
  const nav = useNavigate()
  const click = () => {
    const { name, email, subject, message } = form;
    if(name && email && subject && message){
      nav('/')
    }else{
      return toast('Iltimos formni toldiring !')
    }
  }
  const Change = (ev) => {
    const {name, value} = ev.target;
    
    setForm((oldForm) => {
      return {
        ...oldForm,
        [name]: value
      }
    })
  }
  return (
    <div>
      <section className='contactImg'>
        <img src={logoContact} alt="" />
      </section>
      <section className='pAndH2'>
        <h2>Get In Touch With Us</h2>
        <p>For More Information About Our Product & Services. Please Feel Free To Drop Us<br />
        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </section>
      <section className='contact_page'>
        <div>
          <div className='cart_location'>
            <div>
              <img src={imgLoca} alt="" />
            </div>
            <div>
              <h2>Address</h2>
              <p>236 5th SE Avenue, New<br /> York NY10000, United<br /> States</p>
            </div>
          </div>
          <div className='cart_location'>
            <div>
              <img src={callIcon} alt="" />
            </div>
            <div>
              <h2>Phone</h2>
              <p>Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className='cart_location'>
            <div>
              <img src={timeIcon} alt="" />
            </div>
            <div>
              <h2>Working Time</h2>
              <p>Monday-Friday: 9:00 -<br /> 22:00<br /> Saturday-Sunday: 9:00 -<br /> 21:00</p>
            </div>
          </div>
        </div>
        <div className='inputContact'>
          <label htmlFor="name">Your Name</label><br />
          <input className='Abc' type="text" onChange={Change} placeholder='Abc' value={form.name} name="name" id="name" /><br />
          <label htmlFor="email">Email address</label><br />
          <input  className='Abc' onChange={Change} type="email" placeholder='Abc@def.com' value={form.email} name="email" id="email" /><br />
          <label htmlFor="subject">Email address</label><br />
          <input  className='Abc' onChange={Change} type="text" placeholder='This is an optional' value={form.subject} name="subject" id="subject" /><br />
          <label htmlFor="message">Message</label><br />
          <textarea className='textAreaStyele' onChange={Change} value={form.messega} name="message" id="message">Hi! i'd like to ask about</textarea><br />
          <button type='button' onClick={click}>Submit</button>
          <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="dark"
                          transition={Bounce}
                      />
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

// export default class About extends Component {
//   constructor() {
//     super();
//     this.state = { name: '', email: '', subject: '', messega: '' }
//     Change = Change.bind(this);
//     this.click = this.click.bind(this);
//   }
//   Change(ev) {
//     const name = ev.target.name;
//     const value = ev.target.value;
//     this.setState({
//       [name]: value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <section className='contactImg'>
//           <img src={logoContact} alt="" />
//         </section>
//         <section className='pAndH2'>
//           <h2>Get In Touch With Us</h2>
//           <p>For More Information About Our Product & Services. Please Feel Free To Drop Us<br />
//           An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
//         </section>
//         <section className='contact_page'>
//           <div>
//             <div className='cart_location'>
//               <div>
//                 <img src={imgLoca} alt="" />
//               </div>
//               <div>
//                 <h2>Address</h2>
//                 <p>236 5th SE Avenue, New<br /> York NY10000, United<br /> States</p>
//               </div>
//             </div>
//             <div className='cart_location'>
//               <div>
//                 <img src={callIcon} alt="" />
//               </div>
//               <div>
//                 <h2>Phone</h2>
//                 <p>Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
//               </div>
//             </div>
//             <div className='cart_location'>
//               <div>
//                 <img src={timeIcon} alt="" />
//               </div>
//               <div>
//                 <h2>Working Time</h2>
//                 <p>Monday-Friday: 9:00 -<br /> 22:00<br /> Saturday-Sunday: 9:00 -<br /> 21:00</p>
//               </div>
//             </div>
//           </div>
//           <div className='inputContact'>
//             <label htmlFor="name">Your Name</label><br />
//             <input className='Abc' type="text" onChange={Change} placeholder='Abc' value={this.state.name} name="name" id="name" /><br />
//             <label htmlFor="email">Email address</label><br />
//             <input  className='Abc' onChange={Change} type="email" placeholder='Abc@def.com' value={this.state.email} name="email" id="email" /><br />
//             <label htmlFor="subject">Email address</label><br />
//             <input  className='Abc' onChange={Change} type="text" placeholder='This is an optional' value={this.state.subject} name="subject" id="subject" /><br />
//             <label htmlFor="message">Message</label><br />
//             <textarea className='textAreaStyele' onChange={Change} value={this.state.messega} name="message" id="message">Hi! i'd like to ask about</textarea><br />
//             <button type='button' onClick={this.click}>Submit</button>
//             <ToastContainer
//                             position="top-right"
//                             autoClose={5000}
//                             hideProgressBar={false}
//                             newestOnTop={false}
//                             closeOnClick
//                             rtl={false}
//                             pauseOnFocusLoss
//                             draggable
//                             pauseOnHover
//                             theme="dark"
//                             transition={Bounce}
//                         />
//           </div>
//         </section>
//         <section>
//           <div className='card_img_father'>
//             <div className='card_img_h2'>
//               <div>
//                 <img src={kubok} alt="" />
//               </div>
//               <div>
//                 <h2>High Quality</h2>
//                 <p>crafted from top materials</p>
//               </div>
//             </div>
//             <div className='card_img_h2'>
//               <div>
//                 <img src={galochka} alt="" />
//               </div>
//               <div>
//                 <h2>Warranty Protection</h2>
//                 <p>Over 2 years</p>
//               </div>
//             </div>
//             <div className='card_img_h2'>
//               <div>
//                 <img src={podarok} alt="" />
//               </div>
//               <div>
//                 <h2>Free Shipping</h2>
//                 <p>Order over 150 $</p>
//               </div>
//             </div>
//             <div className='card_img_h2'>
//               <div>
//                 <img src={call} alt="" />
//               </div>
//               <div>
//                 <h2>24 / 7 Support</h2>
//                 <p>Dedicated support</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     )
//   }
// }
export default About