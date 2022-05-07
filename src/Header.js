import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img 
            className='header__icon'
            src="https://oldschool.runescape.wiki/images/Blue_partyhat_detail.png?c1867"
            alt=""
        />

        <div className='header__center'>
            Andrew Kim Webpage
        </div>

        <div className='header__right'>

        </div>

    </div>
  )
}

export default Header