import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/aboutpage.png';
import Common from "./Common";

const About = () => {
    return (
      <React.Fragment>
    
      <Common name = "Welcome to About Page" imgsrc={web} visit="/contact" btname="contact now"/>
  
     </React.Fragment>
      )};


export default About;