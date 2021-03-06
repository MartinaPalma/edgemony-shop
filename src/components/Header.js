import React from 'react'
import PropTypes from "prop-types";

import HeaderCart from './HeaderCart';

import './Header.css';

function Header({ logo, title , cart , products}) {
  return (
    <header className="Header">
      <img src={logo} alt= {title}/>
      <HeaderCart cart={cart} products={products} />
    </header>
  );
}
{/* <ModalCart 
      isOpenCart={modalCartIsOpen} 
      product={product}
      onCloseCart={() =>  setModalCartIsOpen(false)}/>  */}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cart: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
};

export default Header;