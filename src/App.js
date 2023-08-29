import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import Layout from './components/Layout';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Cabinet from './components/customer cabinet/Cabinet';
import SearchInput from './components/search/SearchInput';
import EyeLiner from './components/products/eyes/Eyeliner';
import Eyeshadow from './components/products/eyes/Eyeshadow';
import Mascara from './components/products/eyes/Mascara';
import EyeBrows from './components/products/brows/EyeBrows';
import Lipstick from './components/products/lips/Lipstick';
import LipLiner from './components/products/lips/LipLiner';
import Blush from './components/products/face/Blush';
import Bronzer from './components/products/face/Bronzer';
import Foundation from './components/products/face/Foundation';
import Body from './components/products/body/Body';
import Fragrances from './components/products/fragrances/Fragrances';
import FetchData from './components/search/FetchData';
import ProductCard from './components/product-card-item/ProductCard';

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const addProductToCart = (name, price, imgUrl, id, brand) => {
    const hasItem = shoppingList.some(item => item.id === id);
    if (hasItem === true) {
      const aaa = shoppingList.find(item => item.id === id)
      if (aaa.id === id) {
        aaa.amount = aaa.amount + 1
      }
    } else {
      setShoppingList([...shoppingList,
      { id: id, name: name, price: price, imgUrl: imgUrl, brand: brand, amount: 1, priceTotal: price }])
    }
    console.log(hasItem);
  }

  const [inputValue, setInputValue] = useState('');
  const [featureValue, seFeatureValue] = useState('')

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  console.log(inputValue);


  const handleFeaturedInput = (item) => {
    seFeatureValue(item)
  }
  console.log(featureValue);

  const [currentProduct, setCurrentProduct] = useState([])

  const openProductCard = (name, price, imgUrl, id, brand) => {
    setCurrentProduct({
      name: name,
      price: price,
      imgUrl: imgUrl,
      id: id,
      brand: brand
    })
  }
  console.log(currentProduct);


  return (
    <div className="App">
      <Routes>
        <Route  path={process.env.PUBLIC_URL}
          element={<Layout
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleFeaturedInput={handleFeaturedInput}
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
            openProductCard={openProductCard}
            currentProduct={currentProduct} />}>

          <Route index
            element={<Home
              addProductToCart={addProductToCart}
              openProductCard={openProductCard}
              currentProduct={currentProduct}
            />} />


          <Route path='search-output'
            element={<FetchData
              inputValue={inputValue}
              setInputValue={setInputValue}
              addProductToCart={addProductToCart}
              featureValue={featureValue}
              openProductCard={openProductCard}
              currentProduct={currentProduct}
            />} />


          <Route path='eyeliner'
            element={<EyeLiner
              addProductToCart={addProductToCart}
              openProductCard={openProductCard}
              currentProduct={currentProduct} />} />

          <Route path='eyeshadow'
            element={<Eyeshadow
              addProductToCart={addProductToCart}
              openProductCard={openProductCard}
              currentProduct={currentProduct} />} />

          <Route path='mascara'
            element={<Mascara
              addProductToCart={addProductToCart}
              openProductCard={openProductCard}
              currentProduct={currentProduct} />} />

          <Route path='brows'
            element={<EyeBrows
              addProductToCart={addProductToCart}
              openProductCard={openProductCard}
              currentProduct={currentProduct} />} />


          <Route path='lipstick'
            element={<Lipstick
              addProductToCart={addProductToCart}
              openProductCard={openProductCard}
              currentProduct={currentProduct} />} />

          <Route path='lipliner'
            element={<LipLiner
              addProductToCart={addProductToCart}
              openProductCard={openProductCard}
              currentProduct={currentProduct} />} />

          <Route path='body' element={<Body />} />

          <Route path='fragrances' element={<Fragrances />} />

          <Route path='blush' element={<Blush
            addProductToCart={addProductToCart}
            openProductCard={openProductCard}
            currentProduct={currentProduct} />} />

          <Route path='bronzer'
            element={<Bronzer
              addProductToCart={addProductToCart}
              openProductCard={openProductCard}
              currentProduct={currentProduct} />} />

          <Route path='foundation'
            element={<Foundation
              addProductToCart={addProductToCart}
              openProductCard={openProductCard}
              currentProduct={currentProduct} />} />
            
          

          <Route path='search'
            element={<SearchInput
              handleInputChange={handleInputChange}
              inputValue={inputValue}
              setInputValue={setInputValue}
              featureValue={featureValue}
              handleFeaturedInput={handleFeaturedInput}
            />} />


          <Route path='cart'
            element={<Cart
              shoppingList={shoppingList}
              setShoppingList={setShoppingList} />} />


          <Route path='product-card'
            element={<ProductCard
              currentProduct={currentProduct} />} />



          <Route path='cabinet'
            element={<Cabinet />} />


          <Route path='*' element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
