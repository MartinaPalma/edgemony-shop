import React from 'react'
import './Modal.css'


function Modal({ isOpen, title, img, description, price, onClose }) {

    return isOpen && ( 
    <div className='modal--is-open'>
      {title}
      <img src={img}></img>
      <br/>
      {description}
      <br/>
      <br/>
      €{price}


        <div className='BtnOnClose'>
        <button type="button" onClick={() => onClose()} >X</button>
        </div>
        </div>
    );
}
export default Modal