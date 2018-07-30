import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => {
  return (
    <nav className='navbar is-fixed-bottom is-light navbar-tab-active-color'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link className='navbar-item logoHover' to='/' />

          <div className='navbar-start'>
            <Link className='navbar-item' to='/products'>Respons Speakers</Link>
            <Link className='navbar-item' to='/about'>About</Link>
            <Link className='navbar-item' to='/about'>Philosophy</Link>
            <Link className='navbar-item' to='/History'>History</Link>
            <Link className='navbar-item' to='/blog'>News</Link>
            <Link className='navbar-item' to='/pricing'>Music</Link>
          </div>
          <div className='navbar-end' />
        </div>
      </div>
    </nav>
  )
}

export default NavBar

