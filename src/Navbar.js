import React from 'react'
import './Navbar.css'

function Header() {
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <div className='navbar__logo'>
        </div>
        <div className='navbar__links-container'>
          <p><a href="home">Home</a></p>
          <p><a href="pictures">Pictures</a></p>
          <p><a href="projects">Projects</a></p>
          <p><a href="resume">Resume</a></p>
          <p><a href="about-me">About Me</a></p>
        </div>
      </div>
    </div>
  )
}

export default Header