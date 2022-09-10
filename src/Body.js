import React from 'react'
import './Body.css'
import selfie from './sunrise_at_delicate_arch.jpeg';
import logo from './tree.jpg';


function Body() {
  return (
    <div className='body'>
        <img src={selfie} alt = "Image of me at Delicate Arch at sunrise" width = "518" height = "533" />
        <img src={logo} alt = "image for espn team lol" />
    </div>
  )
}

export default Body
