import React from 'react'
import { Link } from 'react-router-dom';
import style from '../../Style/Navbar.css';
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">BeautyHub  </a >
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-5 ">
              <Link className="nav-link navStyle" to="Home">Home</Link >
              <Link className="nav-link navStyle" to="OurProducts">Our Products </Link >
    
            </div>

          </div>
          <nav class="navbar bg-bg-transparent">
            <div class="container-fluid">
              <form class="d-flex " role="search">
                <input class="form-control ms-auto me-4 " type="search" placeholder="Search" aria-label="Search" />
<div className="sosial">
                <li className='nav-items d-flex p-2'>

                  <a className='nav-link' href='#'>
                    <i class="fa-brands fa-youtube"></i>
                  </a>

                  <a className='nav-link' href='#'>
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a className='nav-link' href='#'>

                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>

                </div>

               
              </form>
            </div>
          </nav>
        </div>
      </nav>
    </>
  )
}
