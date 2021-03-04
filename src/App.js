import "./App.css";

import { useState, useEffect } from "react";

import Header from './components/Header';

import Hero from './components/Hero';

import ProductList from './components/ProductList';

import Modal from './components/Modal';

import Loading from './components/Loading';

import ErrorBanner from './components/ErrorBanner';



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
  //useState mi permette di aggiornare lo stato in ogni render
  const [isLoading, setLoading] = useState(false) //all'inizio non sta caricando niente quindi è false
  const [isError, setError] = useState('')
  const [ retry, setRetry ] = useState(false)

  useEffect(() => {
    setLoading(true);
    
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => { 
        const hasError = Math.random() > 0.5
      if (!hasError) {
        setProducts(data); //callback
        console.log(data)
        setLoading(false);
        setError('');
      } else {
        throw new Error('Product server API call response error')
      }
    })
      .catch((err) => {
        setError(err.message); 
        setLoading(false);
      });
  }, [retry]);

  return (
    <div className="App">
      <Header logo = {data.logo} title={data.title} />

      <Hero
        title = {data.title}
        description = {data.description}
        cover = {data.cover}
      />
     
      { isLoading 
      ? <Loading />
      : isError 
        ? <ErrorBanner isError= {isError} setRetry={ () => setRetry(!retry)} closeError={() => setRetry (false)} /> 
        : <ProductList products={products}/>
      }

      {/* <Modal isOpen={ modalIsOpen } product={product} onClose={onClose} /> */}
</div>
);
}


export default App
