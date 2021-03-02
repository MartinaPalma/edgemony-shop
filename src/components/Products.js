import React, {useState} from 'react'

import Modal from './Modal'; 

import './Products.css'; 



 function Products ({cardImage , titleProducts, descriptionProducts, price }) {
  const [ modalIsOpen, setModalIsOpen] = useState(false); 

  return (
  <div className="Card">
    <img src={cardImage} alt= "image"></img>
    <h5>{titleProducts}</h5>
    {/* <h6>{descriptionProducts}</h6> */}
    <span>€{price}</span>
      <main>
      <div className="modal">
        <button type="button" className= "BtnOpen"onClick={() => setModalIsOpen(!modalIsOpen)} >View details</button>
      </div>

      </main>
      <Modal title={titleProducts} description={descriptionProducts} img={cardImage} price={price} isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      </div>
    );
  }

export default Products
