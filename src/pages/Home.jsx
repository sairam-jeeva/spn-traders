import React from 'react'
import Customers from '../components/customers/Customers'
import Features from '../components/features/Features'
import Footer from '../components/Footer'
import Header from '../components/home/Header'
import NavBar from '../components/NavBar'
import Products from '../components/products/products'
import Testimonials from '../components/testimonials/Testimonials'

const Home = () => {
  return (
    <>
        <NavBar/>
        <Header/>
        <Products/>
        <Customers/>
        <Features/>
        <Testimonials/>
        <Footer/>
    </>
  )
}

export default Home