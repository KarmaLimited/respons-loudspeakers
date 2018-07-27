import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo2.svg'

const Navbar = () => (
  <nav className="navbar is-fixed-bottom is-light navbar-tab-active-color">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item logoHover">
          <figure className="image">
            <img src={logo} alt="respons-loudspeaker-logo" style={{ width: '100px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Respons Speakers
        </Link>
        <Link className="navbar-item" to="/products">
        Philosophy
      </Link>
      <Link className="navbar-item" to="/products">
      History
    </Link>
    <Link className="navbar-item" to="/products">
    News
  </Link>
  <Link className="navbar-item" to="/products">
  Music
</Link>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  </nav>
)

export default Navbar
