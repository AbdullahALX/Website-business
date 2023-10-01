import React, { useState } from 'react';
import '../Navbar/navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import arrow from '../../assets/arrow.svg';
import menu from '../../assets/menu.svg';

const Navbar = () => {
  const [isOpan, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="resDiv">
        <img
          src={logo}
          alt="logo"
          className="logo"
          // onClick={() => {
          //   var moveTo = document.getElementsByClassName('homeContent');
          //   moveTo[0].scrollIntoView({ behavior: 'smooth', duration: '500' });
          // }}
        />
      </div>

      <div className={`navLinks ${isOpan && 'openLink'}`}>
        <Link
          className="navLinkItem"
          activeClass="active"
          // to="Home"
          // spy={true}
          // smooth={true}
          // offset={-100}
          // duration={500}
        >
          Home
        </Link>
        <Link
          className="navLinkItem"
          activeClass="active"
          // to="Skills"
          // spy={true}
          // smooth={true}
          // offset={-50}
          // duration={500}
        >
          Services
        </Link>
        <Link
          className="navLinkItem"
          activeClass="active"
          // to="Works"
          // spy={true}
          // smooth={true}
          // offset={-100}
          // duration={500}
        >
          Work
        </Link>
        <Link
          className="navLinkItem"
          activeClass="active"
          // to="contactPage"
          // spy={true}
          // smooth={true}
          // offset={-100}
          // duration={500}
        >
          Blog
        </Link>
      </div>

      <button
        className="contactNavButton"
        // onClick={() => window.open(resumeFile)}
      >
        Connect
        <img src={arrow} alt="contact-me-icon" className="navContactMeImg" />
      </button>
      <div
        className={`nav-toggle ${isOpan && 'openToggle'}`}
        onClick={() => {
          setIsOpen(!isOpan);
        }}
      >
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
