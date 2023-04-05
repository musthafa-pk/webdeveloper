import React from 'react'
import About from './About/About'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Topbar from './Topbar/Topbar'
import ContactUS from './ContactUs/ContactUs'


export default function Html1() {

  return (
    <div>
      <Topbar/>
        <Hero/>
        <About/>
        <ContactUS/>
        <Footer/>
    </div>
  )
}
