import React from 'react'
import './Navbar.css'

function Header() {
  return (
    <div className='header'>
      <div className='header__links'>
        <div className='header__logo'>
        </div>
        <div className='header__links-container'>
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