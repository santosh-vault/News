import React from 'react'
import "./App.css"
import Navbar from './Bars/Navbar'
import Footer from './Bars/Footer'
import Hero from './Home/Hero'
import SecondNewsContainer from './Cards/SecondNewsContainer'


const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <SecondNewsContainer News="Breaking News"/>
        <SecondNewsContainer News="Sports News"/>
        <SecondNewsContainer News="International News"/>
        <SecondNewsContainer News="Fast News"/>
        <Footer />
        
    </>
  )
}

export default App
