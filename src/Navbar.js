import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <div className='navbar__logo'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/White_box_55x90.png" alt="logo" />
        </div>
        <div className='navbar__links-container'>
          <p><a href="home">Home</a></p>
          <p><a href="pictures">Pictures</a></p>
          <p><a href="projects">Projects</a></p>
          <p><a href="resume">Resume</a></p>
          <p><a href="about-me">About Me</a></p>
        </div>
      </div>
      <div className='navbar__social'>
        <button type="button">Instagram</button>
      </div>

    </div>
  )
}

export default Navbar