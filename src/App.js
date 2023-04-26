import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/about' Component={About}/>
    <Route path='/contact' Component={Contact}/>
    <Route path='/service' Component={Service}/>
    <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    <Footer/>

    </React.Fragment>
  );
}

export default App;
