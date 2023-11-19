import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
const Footer = () => {
  return (
    <nav className="footer-nav" id="footer-navbar">
       <div className='footer-nav-content'>
            <ul className="footer-nav-items">
                <li className="footer-nav-item">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Home
                </Link>
                </li>
                <li className="footer-nav-item">
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    About
                </Link>
                </li>
                <li className="footer-nav-item">
                <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Services
                </Link>
                </li>
                <li className="footer-nav-item">
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Contact
                </Link>
                </li>          
            
          </ul>
        </div>
    </nav>
  )
}

export default Footer