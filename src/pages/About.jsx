import React from 'react'
import AboutHead from '../components/abouthead/AboutHead'
import AboutUs from '../components/aboutus/AboutUs'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
// import OurCustomers from '../components/ourcustomers/OurCustomers'

const About = () => {
  return (
    <>
    <NavBar/>
    <AboutHead/>
    {/* <OurCustomers/> */}
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default About