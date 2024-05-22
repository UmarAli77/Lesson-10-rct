import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');
    const Submit = async () => {
      try {
          const response = await axios.post('https://test-ecommerce-gamma.vercel.app/auth', {
          login: userName,
          password: password
        })
        if(response.data.token) {
          navigate('/')
          localStorage.setItem('auth-token', response.data.token)
        }
      }catch(err) {
        console.log('Xatolik yuz berdi', err);
      }
    }
  return (
    <div className='w-screen h-screen bg-green-600 flex items-center justify-center'>
      <div className='bg-white p-5 w-[340px] rounded-2xl shadow-2xl'>
        <h1 className='text-center text-3xl mb-3'>Login</h1>
        <div className='flex justify-between items-center mt-6'>
            <label htmlFor="username">User Name</label>
            <input className='cursor-pointer border-2 border-black border-solid rounded-md' id='username' type="text" value={userName} onChange={(el) => {setUserName(el.target.value)}} />
        </div>
        <div className='flex justify-between items-center mt-5'>
            <label htmlFor="password">Password</label>
            <input className='cursor-pointer ml-12 border-2 border-black border-solid rounded-md' id='password' type="password" value={password} onChange={(el) => {setPassword(el.target.value)}} /><br />
        </div>
        <button onClick={Submit} type='button' className='px-8 py-2 bg-black rounded-md text-white mt-8 ml-24'>Login</button>
      </div>
    </div>
  )
}

export default Login
