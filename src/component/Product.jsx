import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { useGetUrl } from '../Hook/hook';

export default function Product() {
    const product = useGetUrl('products')
    return (
    <div className='grid grid-cols-4 gap-5'>
      {
        product && product.map(el => 
            <Link to={`/products/${el.id}`} key={el.id}>
                <div className='card_father'>
                    <div className='card_1'>
                        <img className='w-[500px]' src={el.image} alt="" />
                        <div className='card_1bg'>
                            <h2>{el.title}</h2>
                            <p>{el.subtitle}</p>
                            <span className='span_1'>{el.newPrice}</span><span><del className='span_del_1'>{el.oldPrice}</del></span>
                            <button className='btn_foiz'>-30%</button>
                        </div>
                    </div>
                </div>
            </Link>
        )
      }
    </div>
  )
}
