import React from 'react'

import './Products.css'; 

 function Products ({cardImage , titleProducts, price }) {
  return (
  <div className="Card">
    <img src={cardImage} alt= "image"></img>
    <h5>{titleProducts}</h5>
    <span>€{price}</span>
  </div>
  );
}

export default Products


// class Products extends React.Component {
    
//   render() {

//     const { title, image , price } = this.props.product;
//     return (
//     <div className="Card">
//     <h5>{title}</h5>
//     <img src={image} alt= "image"></img>
//     <span>€{price}</span>
//     </div>
//     );
//   }
// }

  

     