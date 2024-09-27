
// the First requirement: Component Structure
// this is the ProductList component , i named it OurProducts 


import React, { useState } from 'react';

export default function OurProducts({ products, setFilter }) {
  return (
    <>
      <div className="product-page">
      
        <h1 className="heading">Our Products</h1>

        {/* Filter Section */}
        <div className="filter-buttons">
          <button onClick={() => setFilter('All')} className="filter-button btn btn-lg">All Products</button>
          <button onClick={() => setFilter('Makeup')} className="filter-button btn btn-lg">Makeup</button>
          <button onClick={() => setFilter('Haircare')} className="filter-button btn btn-lg">Hair Care</button>
          <button onClick={() => setFilter('Skincare')} className="filter-button btn btn-lg">Skin Care</button>
        </div>

        {/* Product Display Area */}
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image w-100" />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
