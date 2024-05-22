import './Layout.css'
import React, { useEffect, useState } from 'react'
import { Outlet, NavLink, useNavigate, } from 'react-router-dom'
import logo from '../assets/logo-nav.png'
import One from '../assets/1.png';
import Two from '../assets/2.png';
import Three from '../assets/3.png';
import Four from '../assets/4.png';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
    const [ name, setName ] = useState('');
    const navigt = useNavigate();
    function Change(event) {
        setName({ name: event.target.value })
    }
    function Click() {
        toast(name)
    }
    useEffect(() => {
        const token = localStorage.getItem('auth-token')
        if(!token) {
            navigt('/login')
        }
    }, [navigt])
    return (
        <div>
          <header className='container'>
              <div className='sub-container'>
                  <div id='logo'>
                      <img className='NavLogo' src={logo} alt='imglogo' />
                  </div>
                  <div id='navlink'>
                      <NavLink className={(el) => {
                          if(el.isActive) {
                              return 'text-red-600'
                          }
                      }} to='/'>Home</NavLink>
                      <NavLink className={(el) => {
                          if(el.isActive) {
                              return 'text-red-600'
                          }
                      }} to='/Cart'>Shop</NavLink>
                      <NavLink className={(el) => {
                          if(el.isActive) {
                              return 'text-red-600'
                          }
                      }} to='/Checkout'>About</NavLink>
                      <NavLink className={(el) => {
                          if(el.isActive) {
                              return 'text-red-600'
                          }
                      }} to='/About'>Contact</NavLink>
                  </div>
                  <div className='imgContainer'>
                      <img src={One} alt='imglogonav' />
                      <img src={Two} alt='imglogonav' />
                      <img src={Three} alt='imglogonav' />
                      <img src={Four} alt='imglogonav' />
                  </div>
              </div>
          </header>
          <section className='container'>
              <Outlet />
          </section>
          <footer className='footer-father'>
              <hr />
              <div className='container'>
                  <div className='footer_flex'>
                      <div className='footer-one'>
                          <h2>Funiro</h2>
                          <p className='gray-color'>400 University Drive Suite 200 Coral <br /> Gables,<br /> FL 33134 USA</p>
                      </div>
                      <div className='royxat-footer-1'>
                          <ul>
                              <p className='gray-color'>Links</p>
                              <li>Home</li>
                              <li>Shop</li>
                              <li>About</li>
                              <li>Contact</li>
                          </ul>
                      </div>
                      <div>
                          <ul className='royxat-footer-1'>
                              <p className='gray-color'>Help</p>
                              <li>Payment Options</li>
                              <li>Returns</li>
                              <li>Privacy Policies</li>
                          </ul>
                      </div>
                      <div className='royxat-input'>
                          <p className='gray-color-1'>Newsletter</p>
                          <input placeholder='Enter Your Email Address' value={name} onChange={Change} type="email" name="name"  id="namusername" />
                          <button type='button' onClick={Click}>SUBSCRIBE</button>
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
                  </div>
              </div>
              <div className='container'>
                  <div className='footer_end'>
                      <hr />
                      <p>2023 furino. All rights reverved</p>
                  </div>
              </div>
          </footer>
        </div>
      )
}
export default Layout;