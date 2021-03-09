import React from 'react'


import './ModalProduct.css'


  
function ModalProduct({ isOpen, onClose, product, cart, setCart }) {

  const isAlreadyInCart = () => cart.find(cartProduct => cartProduct.id === product.id)
  const toggleCart = () => {
    if (isAlreadyInCart()) {
      const newCart = cart.filter(cartProduct => cartProduct.id !== product.id)
      setCart(newCart)
    } else {
      setCart([ { id: product.id, quantity: 1 }, ...cart ])
    }
  }
    return isOpen && ( 
    <div className='ProductModal'>
       <div className="overlay" onClick={() => onClose()}></div>
      <div className="modal-content">
       <button type="button" className="BtnOnClose" onClick={() => onClose()} >x</button>
      <img src={product.image}  alt={product.title} />
      <div className="product">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>€{product.price}</span>
    </div>
    <div className="BtnCart">
    <button type="button" className="BtnAddtocart" onClick={toggleCart}>{ isAlreadyInCart() ? 'Remove to Cart -' : 'Add to Cart +'}</button>
    </div>
    </div>
   </div>
    );
}
export default ModalProduct