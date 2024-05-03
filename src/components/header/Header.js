import React from 'react'
import "./Header.css"
import logo from "../../assets/image/header/header logo.svg"
import { HeaderListItem } from '../../static'

const Header = () => {

  const itemLink = HeaderListItem?.map((itemLink)=>(
    <li className='header__item' key={itemLink.id}>
      <a className='header__link' href="#">{itemLink.title}</a>
    </li>
  ))
  return (
    <>
      <header className='header'>
        <nav className='header__navbar container'>
          <div className='header__boxs'>
            <a className='site__logo-link' href="#">
              <img className='site__logo-link__img' src={logo} alt="Site logo" />
            </a>
            <ul className='header__list'>
              {itemLink}
            </ul> 
          </div>
          <div className='header__btns'>
            <button className='header__btn'>Booking Now</button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header