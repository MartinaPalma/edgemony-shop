import PropTypes from "prop-types";
import ModalCart from './ModalCart'; 

import "./HeaderCart.css"; 

function HeaderCart({ cart, products }) {
    const totalPrice = cart.reduce((acc, cartItem) => {
      const product = products.find(product => product.id === cartItem.id )
      return acc + product.price
    }, 0).toFixed(2)
      
    return (
      <div className="HeaderCart">
        { !!cart.length && <span className="price">{totalPrice}€</span> }
        <span className="icon">
          <i className="fas fa-shopping-cart"></i>
          { !!cart.length && <span className="qty">{cart.length}</span> }
        </span>
      </div>
    );
  }

{/* <ModalCart 
      isOpenCart={modalCartIsOpen} 
      product={product}
      onCloseCart={() =>  setModalCartIsOpen(false)}/>  */}
      
      
  HeaderCart.propTypes = {
    cart: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
  };

export default HeaderCart;