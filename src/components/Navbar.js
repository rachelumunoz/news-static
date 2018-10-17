import React from 'react'
import { Link } from "gatsby"

import logo from '../img/bitFist.svg'
import bitText from '../img/bitText.svg'
import '../layouts/navbar.sass'

const Navbar = () => (
  <nav>
    <div className="bandsintownLogoContainer">
      <a className="bandsintownLogo" href="/">
        <img className="bitFist" src={logo}/>
        <img className="bitText" src={bitText}/> 
      </a>
    </div>
    <div className="links">
      <a href="/">News</a>
      <a href="/">Reviews</a>
      <a href="/">Features</a>
      <a href="/">Lists</a>
    </div>
  </nav>
)

export default Navbar
