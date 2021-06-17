import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {


  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light  " style={{ backgroundColor: "#e6ebe7" }}>
        <div class="container-fluid">
          <Link class="navbar-brand" to="/"> <i class="fa fa-cutlery" aria-hidden="true" style={{ fontSize: "40px" }}></i></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbar" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link className="list" to="/">Home</Link>
              </li>

              <li class="nav-item">
                <Link className="list" to="/popular">Popular</Link>
              </li>
              <li class="nav-item">
                <Link className="list" to="/trending">Trending</Link>
              </li>
              <li class="nav-item">
                <Link className="list" to="/recipes">Recipies</Link>
              </li>
              <li class="nav-item">
                <Link className="list" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link className="list" to="/contact">Contact</Link>
              </li>

            </ul>
           
              <span class="dropdown">
                <button class="btn btn-outlined-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Categories
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link class="dropdown-item" to="/cakes">Cakes</Link>
                  <Link class="dropdown-item" to="/sweet">Sweets</Link>
                  <Link class="dropdown-item" to="/specials">Specials</Link>
                  <Link class="dropdown-item" to="/ice">Ice Creams</Link>
                </div>
              </span>
            
          
          </div>
        </div>
      </nav>

    </>
  )
}
