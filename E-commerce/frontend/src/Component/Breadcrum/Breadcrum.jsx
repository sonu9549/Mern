import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const { product } = props;

    // Check if product is defined and has the category property
    if (!product || !product.category) {
        // If product is undefined or category is not defined, return null or some default value
        return null; // or return some default breadcrum without product information
    }

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="" />
            SHOP <img src={arrow_icon} alt="" />
            {product.category}
            <img src={arrow_icon} alt="" />
            {product.name}
        </div>
    );
};

export default Breadcrum;

