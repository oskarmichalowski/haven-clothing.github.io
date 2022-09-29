import React from 'react'
import ProductCard from './ProductCard'
import PropTypes from 'react';
import useGenerateId from 'hooks/useGenerateId'

export default function ProductList({products}) {

  const generateId = useGenerateId()
  
  return (
    <div>
      <h1 className='font-Syne font-bold text-5xl mt-6' >T-Shirts</h1>
      {/* RENDER THE LIST OF PRODUCTS BY MAPPING
      props> https://www.youtube.com/watch?v=5s8Ol9uw-yM
      list rendering > https://www.youtube.com/watch?v=5s8Ol9uw-yM
      */}

      {

         products.map(product => <ProductCard  products={products} logo={product.logo.url} title={product.title} price={product.price} key={generateId('id')} /> )
         
      }


    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array,
  title: PropTypes.string,
  price: PropTypes.number
}