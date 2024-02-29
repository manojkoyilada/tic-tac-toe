import React from 'react';
import logo from '../../public/game-logo.png'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="TIC TAC TOE" />
      <h1>TIC TAC TOE</h1>
    </header>
  )
}

export default Header