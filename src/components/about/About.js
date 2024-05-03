import React from 'react'
import aboutImg from"../../assets/image/about/Mask Group.png"
import "./About.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container'>
            <div className='about__wrapper'>
                <div className='about__left'>
                  <img className='about__left__img' src={aboutImg} alt="About img" />
                </div>
                <div className='about__right'>
                    <p className='about__desc'>ABOUT US</p>
                    <h2 className='about__title'>Food Stalls with Persons but  to  Product marketing plane catlogues etc to. </h2>
                    <p className='about__text'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective.</p>
                    <button className='about__btn'>Read More</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About