import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetUrl } from '../Hook/hook';

function SingleProduct() {
  const {productId} = useParams()
  const SingleProduct = useGetUrl(`products/${productId}`);
  return (
    <div className="container">
      {
        SingleProduct && SingleProduct.map(el => 
          <img src={el.image} alt="" />
        )
      }
    </div>
  )
}

export default SingleProduct
