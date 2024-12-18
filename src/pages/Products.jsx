import React from 'react'
import CareersHead from '../components/productshead/ProductsHead'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ProductsList from '../components/productslist/ProductsList'

const Products = () => {
  return (
    <>
    <NavBar/>
    <CareersHead/>
    <ProductsList/>
    <Footer/>
    </>
  )
}

export default Products