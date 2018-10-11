import React from 'react'
import { Link } from "gatsby"

import logo from '../img/bit-logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Bandsintown" style={{ width: 'auto' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
      <Link className="navbar-item" to="/news">
          News
        </Link>
        <Link className="navbar-item" to="/reviews">
          Reviews
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
