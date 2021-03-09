import React from 'react'


import './ModalCart.css'

//da verificare
function ModalCart({ isOpenCart, onCloseCart, product }) {
    return isOpenCart && ( 
        <div className='ModalCart'>
           <div className="overlay" onClick={() => onCloseCart()}></div>
          <div className="modalCart-content">
           <button type="button" className="BtnOnClose" onClick={() => onCloseCart()} >x</button>
          <img src={product.image}  alt={product.title} />
          <div className="content">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <span>€{product.price}</span>
        </div>
        </div>
        </div>
        );
    }
    export default ModalCart