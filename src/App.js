//import React, {useState} from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from './components/pages/Home'
import Product from './components/pages/Product'
import About from './components/pages/About'
import Order from './components/pages/Order'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Contact from './components/pages/Contact'

import Footer from './components/Footer'
import Navigation from './components/Navigation'

const App = () => {
  
  return (
    <div className='container py-3'>
    <Navigation/>
    <div className='containter'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </div>
    <Footer />
    </div>
  );
}

export default App