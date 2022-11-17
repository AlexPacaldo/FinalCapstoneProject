import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './home.js'
import { HashRouter } from "react-router-dom";
import UserHome from '../components/UserHome';
import RecipeInst from '../components/RecipeInst';

const Index = () => {
  return (
    <HashRouter>
      <Header/>
       <Routes>
            <Route exact path = "/" element={<Home/>}/>
            <Route exact path = "/UserHome" element={<UserHome/>}/>
            <Route exact path = "/RecipeInst" element={<RecipeInst/>}/>
        </Routes>
      <Footer/>  
    </HashRouter>
  )
}

export default Index