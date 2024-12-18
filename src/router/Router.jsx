import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Careers from '../pages/Careers'
import Home from '../pages/Home'
import Products from '../pages/Products'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/products" element={<Products/>}/>
    </Routes>
    </>
  )
}
export default Router