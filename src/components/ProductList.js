import { PropTypes } from "prop-types";

import Product from "./Product";


import "./ProductList.css";
function ProductList({ products , inputUser, cart, setCart }) {
  return (
    <div className="ProductList">
      {products
      .filter((product) => product.description.toUpperCase().includes(inputUser.toUpperCase()) || 
        product.title.toUpperCase().includes(inputUser.toUpperCase()))
      .map((product) => (
        <Product product={product} cart={cart} setCart={setCart} key={product.id} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
