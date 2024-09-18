import React from 'react'
import logo from '/isologo.png'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className='navbarContainer'>
      <img src={logo} alt="" className='logo'/>
      <MenuIcon className='burgerMenu'/>
    </div>
  )
}

export default Navbar