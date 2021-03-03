import {useState} from 'react'
import { PropTypes } from "prop-types";

import Modal from './Modal'; 

import './Product.css'; 


//  function Product ({cardImage , titleProducts, descriptionProducts, price }) 
 function Product ({ product }) {
  const [ modalIsOpen, setModalIsOpen] = useState(false); 

  return (
  <article className="Product">
    <img src={product.image} alt= {product.title}/>
    <div className="content">
    <h5>{product.title}</h5>
    <span>€{product.price}</span>
    </div>
      <button type="button" className= "BtnOpen"onClick={() => setModalIsOpen(!modalIsOpen)} >View details</button>
      <Modal 
      isOpen={modalIsOpen} 
      product={product}
      onClose={() => setModalIsOpen(false)} />
      </article>
    );
  }

  Product.propTypes = {
    product: PropTypes.object.isRequired,
  };

export default Product;
