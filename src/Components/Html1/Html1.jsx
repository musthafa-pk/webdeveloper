import React from 'react'
import About from './About/About'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Topbar from './Topbar/Topbar'
import ContactUS from './ContactUs/ContactUs'


export default function Html1(props) {
  return (
    <div>
      <Topbar data = {props.data}/>
        <Hero data = {props.data}/>
        <About data = {props.data}/>
        <ContactUS data = {props.data}/>
        <Footer data = {props.data}/>
    </div>
  )
}
