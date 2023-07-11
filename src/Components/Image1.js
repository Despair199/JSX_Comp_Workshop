import React from 'react'
import { product } from '../product'

const Image1 = () => {
  return (
    <div>
        <img style={{height:"250px"}} alt='test' src={product.image} /> 
    </div>
  )
}

export default Image1