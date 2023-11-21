import React, { Component, useState } from "react";
import logo from "../images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import {FaHome, FaTh, FaBars, FaUserAlt, FaServicestack, FaPhone, FaIcons, FaCogs} from "react-icons/fa";

const Navbar = ()=> {  
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => {setIsOpen(!isOpen);
    
  }
  // const scrollToTop = () => {scroll.scrollToTop();}  
    return (
      <nav className="nav" id="navbar" style={{width: isOpen? "10%" : "5%"}}>
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            // onClick={this.scrollToTop}
          />
          <div  className="bars">
              <FaBars onClick={toggle}/>
          </div>
          <ul className="nav-items" style={{display: isOpen? "flex" : "none"}}>
            <li className="nav-item">            
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}              
              >
                <FaHome/>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={25}
                duration={500}
              >
                <FaUserAlt/>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={25}
                duration={500}
              >
                <FaCogs/>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={25}
                duration={500}
              >
                <FaPhone/>
                Contact
              </Link>
            </li>
            
            
          </ul>
        </div>
      </nav>
    )
  }

  export default Navbar;