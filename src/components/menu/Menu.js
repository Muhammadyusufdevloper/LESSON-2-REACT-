import React from 'react'
import "./Menu.css"
import { MenuFullFood } from '../../static'

const Menu = () => {
    const menuCard = MenuFullFood?.map((card)=>(
        <div className='menu__card' key={card.id}>
            <div className='menu__img-card'>
                <img className='menu__img-card__img' src={card.img} alt="Menu img" />
            </div>
             <div className='menu__cards__info'>
                <div className='menu__card__part'>
                    <h3 className='menu__card__title'>{card.title}</h3>
                    <p className='menu__card__price'>{card.price}$</p>
                </div>
                <p className='menu__card__text'>{card.desc}</p>
                <div className='menu__card__btns-retng'>
                    <button className='menu__card__btn'>+</button>
                    <img src={card.rating} alt="reating img" />
                </div>   
             </div>
        </div>
    )) 
  return (
    <>
        <section className='menu'>
            <div className='container'>
                <div className='menu__info'>
                    <p className='menu__desc'>MENU</p>
                    <h2 className='menu__title'>Food Full of treaty Love</h2>
                    <p className='menu__text'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
                </div>
                <div className='menu__cads'>
                    {menuCard}
                </div>
            </div>
        </section>
    </>
  )
}

export default Menu