import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  
  const scrollToSection = (sectionId) => {
    // Wrapped in useEffect to ensure DOM is fully loaded
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth',block: 'start'
      });
      setMenu(sectionId);
    } else {
      console.error(`Section with id "${sectionId}" not found`);
      // Fallback to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="navbar">
        <img src={logo} alt="EW" className="nav-logo"/>
        <ul className="nav-menu">
            <li onClick={() => scrollToSection("home")}>Home{menu === "home" ? <hr/> : null}</li>
            <li onClick={() => scrollToSection("about")}>About{menu === "about" ? <hr/> : null}</li>
            <li onClick={() => scrollToSection("projects")}>Projects{menu === "projects" ? <hr/> : null}</li>
            <li onClick={() => scrollToSection("blog")}>Blog{menu === "blog" ? <hr/> : null}</li>
            <li onClick={() => scrollToSection("contact")}>Contact{menu === "contact" ? <hr/> : null}</li>
        </ul> 
        <div className="nav-connect">Connect With Me</div>    
    </div>
  )
}

export default Navbar;