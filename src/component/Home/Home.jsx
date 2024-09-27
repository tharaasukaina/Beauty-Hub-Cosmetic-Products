import React, { useState } from 'react';
import FirstSlide from '../../img/3c3081f6fc6ce2c80db30236eca85163.jpg';
import secSlide from '../../img/11111111.jpg';
import thrdSlider from '../../img/a10440858e9ea5f6d2bc43e07f4d9505.jpg';
import fourthSlider from '../../img/555555.jpg';

import a4 from '../../img/e.jpg' ;
import a5 from '../../img/f.jpg' ;
import a6 from '../../img/w.jpg' ;

import style from '../../Style/Home.css';
const products = [
  { id: 1, name: 'Foundation Cream', category: 'Makeup', price: 25 },
  { id: 2, name: 'Shampoo', category: 'Haircare', price: 15 },
  { id: 3, name: 'Moisturizer', category: 'Skincare', price: 30 },
  { id: 4, name: 'Lipstick', category: 'Makeup', price: 20 },
  { id: 5, name: 'Hair Oil', category: 'Haircare', price: 12 }
];

export default function Home() {
 

  return (

    <>
    <div class="header-content container">
      <div class="overlay">
        <div class="header-content-item">
          <h1>Your Beauty Hub for<br /> Premium Cosmetic Products</h1>
          <span class="line"></span>
          <p class="paragraphone">
            Discover the finest skincare, makeup, and haircare products designed to elevate your beauty routine. Explore our exclusive collections and transform your daily regimen with ease!
          </p>
          {/* <a href="#" class="link">SHOP NOW</a> */}
        </div>
      </div>
    </div>

    <div>
        <div className=" container gallery ">
          <img src={FirstSlide} className=" d-block w1" alt="first slide" />
          <img className="d-block w2" src={secSlide} alt="Second slide" />
          <img className="d-block w3" src={thrdSlider} alt="therd slide" />
          <img className="d-block w4" src={fourthSlider} alt="fourth slide" />
          <img className="d-block w4" src={a4} alt="fourth slide" />
          <img className="d-block w4" src={a5} alt="fourth slide" />
          <img className="d-block w4" src={a6} alt="fourth slide" />
        </div>
      </div>



      <div class="Services">
    <h2 class="para3">Our Beauty Services</h2>
    <span class="line"></span>
    <div class="container">
        <div class="Services-items">
            <div class="Service-item">
                <i class="fa-solid fa-gem"></i>
                <h3>Durable Treatments</h3>
                <p>Our services are characterized by high quality and long-lasting results!</p>
            </div>

            <div class="Service-item">
                <i class="fa-solid fa-laptop"></i>
                <h3>Up-to-Date Techniques</h3>
                <p>We use the latest methods and technologies to maintain your glow.</p>
            </div>

            <div class="Service-item">
                <i class="fa-solid fa-globe"></i>
                <h3>Ready to Enjoy</h3>
                <p>You can enjoy our services as they are, or customize them to your needs!</p>
            </div>

            <div class="Service-item">
                <i class="fa-solid fa-heart"></i>
                <h3>Made with Love</h3>
                <p>Our services are designed with passion to ensure the best beauty experience for you.</p>
            </div>
        </div>
    </div>
</div>
  
    </>
  );
}
