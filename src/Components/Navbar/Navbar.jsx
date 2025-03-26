import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  
 
  // const scrollToSection = (sectionId) => {
  //   // Wrapped in useEffect to ensure DOM is fully loaded
  //   const section = document.getElementById(sectionId);
    
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth',block: 'start'
  //     });
  //     setMenu(sectionId);
  //   } else {
  //     console.error(`Section with id "${sectionId}" not found`);
  //     // Fallback to top of page
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }
  // };
  
  return (
    <div className="navbar">
        <img src={logo} alt="EW" className="nav-logo"/>
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' offset={50} href='#home' ><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <hr/> : null}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <hr/> : null}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={() => setMenu("projects")}>Projects</p> </AnchorLink>{menu === "projects" ? <hr/> : null}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#blog'><p onClick={() => setMenu("blog")}>Blog</p></AnchorLink>{menu === "blog" ? <hr/> : null}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <hr/> : null}</li>
        </ul> 
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>    
    </div>
  )
}

export default Navbar;