import React from 'react'

import './Body.css';

import Products from './Products';

class Body extends React.Component {
  render() {
const { cover, title, description, products } = this.props;
    return (
    <main className="Body">
    <img src={cover}/>
    <div className="content">
    <h1>{title}</h1> 
    <h2>{description}</h2>
    <div>
    <Products product={products}/>
  </div>   
  </div>
</main>
    );
  }
}


export default Body