import {useState} from 'react'
import { PropTypes } from "prop-types";

import ModalProduct from "./ModalProduct"

import './Product.css'; 

 function Product ({ product, cart, setCart }) {
  const [ modalIsOpen, setModalIsOpen] = useState(false); 

  return (
  <article className="Product">
    <img src={product.image} alt= {product.title}/>
    <div className="content">
    <h5>{product.title}</h5>
    <span>€{product.price}</span>
    </div>
      <button type="button" className= "BtnOpen"onClick={() => setModalIsOpen(!modalIsOpen)} >View details</button>
      <ModalProduct 
      isOpen={modalIsOpen} 
      product={product}
      onClose={() => setModalIsOpen(false)}
      cart={cart}
      setCart={setCart}
      />

      </article>
    );
  }

  Product.propTypes = {
    product: PropTypes.object.isRequired,
  };

export default Product;
