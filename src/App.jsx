import React from 'react'
import "./App.css"
import Navbar from './Bars/Navbar'
import Footer from './Bars/Footer'
import Hero from './Home/Hero'


const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <p className=' bg-green-900 w-2/3 h-0.5 mt-10 mx-auto'></p>
        <Footer />
    </>
  )
}

export default App
