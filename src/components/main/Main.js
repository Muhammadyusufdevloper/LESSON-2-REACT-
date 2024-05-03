import React from 'react'
import Hero from '../hero/Hero'
import Features from '../features/Features'
import About from '../about/About'
import Menu from '../menu/Menu'

const Main = () => {
  return (
    <>
        <main>
          <Hero/>
          <Features/>
          <About/>
          <Menu/>
        </main>
    </>
  )
}

export default Main