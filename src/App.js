import "./App.css";

import { useState, useEffect } from "react";

// import { fetchProducts, fetchCatogories } from "./services/api";

import Header from './components/Header';

import Hero from './components/Hero';

import ProductList from './components/ProductList';

import ModalProduct from './components/ModalProduct';

import Loading from './components/Loading';

import ErrorBanner from './components/ErrorBanner';

import Search from "./components/Search";




const fakeProducts = require("./mocks/data/products.json");

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
};

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState('')
  const [ modalIsOpen, setModalIsOpen] = useState(false); 
  const [ retry, setRetry ] = useState(false)
  const [inputUser, setInput] = useState("")
  const [cart, setCart] = useState([])

  useEffect(() => {
    setLoading(true);
    
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => { 
        const hasError = Math.random() > 0.6
      if (!hasError) {
        setProducts(data); 
        console.log(data)
        setLoading(false);
        setError('');
      } else {
        throw new Error('Error!')
      }
    })
      .catch((err) => {
        setError(err.message); 
        setLoading(false);
      });
  }, [retry]);

  return (
    <div className="App">
      <Header logo = {data.logo} title={data.title} cart={cart} products={products}/>

      <Hero
        title = {data.title}
        description = {data.description}
        cover = {data.cover}
      />
      
      <Search inputUser ={inputUser} onSearch={(value) => setInput(value)}/>

      { isLoading 
      ? <Loading />
      : isError 
        ? <ErrorBanner isError= {isError} setRetry={ () => setRetry(!retry)} closeError={() => setRetry ("")} /> 
        : <ProductList cart={cart} setCart={setCart} products={products} inputUser ={inputUser} />
      }

     {/* {products.map(product => ( 
     <ModalProduct 
      isOpen={modalIsOpen} 
      product={product}
      onClose={() => setModalIsOpen(false)}
      cart={cart}
      setCart={setCart}
      /> ))} */}
</div>
);
}

export default App;

