import React from 'react';
import'../styles/Card.css'

export const Card =({productInfo})=>{
    
    return(
        <div className='Card'>
            <span className='descuento'></span>
            <img src={productInfo.thumbnail} alt="" />
            <p className='title-product'>
                {productInfo.title}
            </p>
            <div className='price-table'>
                <p className='price'>
                    {`$ ${productInfo.price}.000`} 
                </p>
                <p className='price-discount'></p>
            </div>
            <button className='addCart'>
                <img src={require('../Assets/Icons/Icon-cart(white).png')} alt="" />    
                {"Agregar al Carrito"}
            </button>
        </div>

    )
}