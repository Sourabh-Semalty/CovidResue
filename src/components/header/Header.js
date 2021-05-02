import React from 'react'
import LinkItems from './LinkItems'
import './Header.css'
const logo = {
  img: 'https://covidrescue.co.in/logo/trackCovid.svg',
  alt: 'logo',
}
const Header = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={logo.img} alt={logo.alt} />
      </div>
      <LinkItems />
    </div>
  )
}

export default Header
