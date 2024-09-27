import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
import Home from '../Home/Home';
import NotFound from './../NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import OurProducts from './../OurProducts/OurProducts';


import foundationImage from '../../img/foundationImage.jpg';
import shampo from '../../img/shampo.jpg';
import moisturizerImage from '../../img/Moisturizer.avif'
import lipstick from '../../img/lipstick.jpg';
import hairOilImage from '../../img/serum.jpg';

import style from '../../Style/OurProducts.css'



export default function App() {
   {/* The second requirement :State Management*/}
  const [filter, setFilter] = useState('All');

  const products = [
    { id: 1, name: 'Foundation Cream', category: 'Makeup', price: 25, image: foundationImage },
    { id: 2, name: 'Shampoo', category: 'Haircare', price: 15, image:shampo },
    { id: 3, name: 'Moisturizer', category: 'Skincare', price: 30, image: moisturizerImage },
    { id: 4, name: 'Lipstick', category: 'Makeup', price: 20, image: lipstick },
    { id: 5, name: 'Hair Oil', category: 'Haircare', price: 12, image: hairOilImage }
  ];
  const filteredProducts = filter === 'All'
    ? products
    : products.filter(product => product.category === filter);

  return (
    <>
      <div className="thara">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Home' element={<Home />} />
        
          {/* The third requirement :Props & Event Handling*/}
          <Route 
            path='OurProducts' 
            element={<OurProducts products={filteredProducts} setFilter={setFilter} />} 
          /> 
        
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
