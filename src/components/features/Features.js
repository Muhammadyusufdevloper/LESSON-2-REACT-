import React from 'react'
import "./Features.css"
import { FeaturesCards } from '../../static'

const Features = () => {
    const featuresCards = FeaturesCards?.map((featuresCard)=>(
        <div className='features__card' key={featuresCard.id}>
            <img className='features__card__img' src={featuresCard.img} alt="features img" />
            <h3 className='features__card__title'>{featuresCard.title}</h3>
            <p className='features__card__desc'>{featuresCard.desc}</p>
        </div>
    ))
  return (
    <>
        <section className='features' id='features'>
            <div className='container'>
                <p className='features__desc'>FEATURES</p>
                <h2 className='features__title'>Food with a New Passion</h2>
                <div className='features__cards'>
                    {featuresCards}
                </div>
            </div>
        </section>
    </>
  )
}

export default Features