import React from 'react'
import './Modal.css'


// function Modal({ isOpen, title, img, description, price, onClose }) {
  
function Modal({ isOpen, onClose, product }) {

    return isOpen && ( 
    <div className='ProductModal'>
       <div className="overlay" onClick={() => onClose()}></div>
      <div className="modal-content">
       <button type="button" className="BtnOnClose" onClick={() => onClose()} >x</button>
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
export default Modal