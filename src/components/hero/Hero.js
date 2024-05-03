import React from 'react'
import heroImg from"../../assets/image/hero/hero.png"
import "./Hero.css"

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className='container'>
                <div className='hero__wrapper'>
                    <div className='hero__left'>
                        <h1 className='hero__title'>Making time a good time by making food the good food.</h1>
                        <p className='hero__desc'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                        <div className='hero__btns'>
                            <button className='hero__btn'>Order Now</button>
                            <button className='hero__btn'>Food Details</button>
                        </div>
                    </div>
                    <div className='hero__right'>
                        <img className='hero__right__img' src={heroImg} alt="Hero img" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero