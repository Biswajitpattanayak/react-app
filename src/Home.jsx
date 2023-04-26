import React from 'react';
import web from '../src/images/img4.avif';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = ()=> {
  return (
    <React.Fragment>
    
    <Common name= "Welcome to Home Page" imgsrc={web} visit="/service" btname="Get Started"/>


  </React.Fragment>

  )};
export default Home;
