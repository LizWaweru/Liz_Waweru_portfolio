import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.png';
import menu_close from '../../assets/menu_close.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
        <img src={logo} alt="EW" className="nav-logo"/>
        <img src={menu_open} onClick={openMenu} alt="menu" className="nav-menu-open" />
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="menu" className="nav-menu-close" />
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