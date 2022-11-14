import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './home.js'
import { HashRouter } from "react-router-dom";

const Index = () => {
  return (
    <HashRouter>
      <Header/>
       <Routes>
            <Route exact path = "/" element={<Home/>}/>
        </Routes>
      <Footer/>  
    </HashRouter>
  )
}

export default Index