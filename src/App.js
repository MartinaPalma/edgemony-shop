import "./App.css";

import Header from './components/Header';

import Hero from './components/Hero';

import Products from './components/Products';

import Footer from './components/Footer';


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
  return (
    <div className="App">
      <Header logo = {data.logo} alt ="logo"/>

      <Hero
        title = {data.title}
        cover = {data.cover}
        description = {data.description}
      />
  
      <div className = 'Card'>
        {
          fakeProducts.map((product) =>
            <Products 
              titleProducts = {product.title}
              cardImage = {product.image}
              price = {product.price}
              key={ product.id }
            />
          )
        }
      </div>
  
      {/* <Footer 
      company = {data.title} /> */}
    </div>
  )
}

export default App;
