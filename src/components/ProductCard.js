import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ logo, title, price}) {
  
  return (
    <div className='justify-center items-center  inline-block p-10'>
        <div className='inline-block'>
         <img src={logo} alt="" />

        </div>
        
        <p className='font-Syne text-xl font-medium'>{title}</p>
        <p className='text-lg'>${price}</p>
    </div>
  )
}

ProductCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
};
