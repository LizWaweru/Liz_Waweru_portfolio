import React from 'react';
import './hero.css';
import image from '../../assets/image.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={image} alt="" />
        <h1> Turning Vision Into Reality With Code.</h1>
        <p>I'm Elizabeth, a <span>Software Developer</span> dedicated to turning ideas into innovative web applications.</p>
        <div className="hero-btns">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Get In Touch</AnchorLink></div>
            <div className="hero-resume">
              <a href="https://drive.google.com/file/d/1wRhVCXCDpeNvQdl5vxDqs1IO9m5VNwnG/view?usp=sharing" className="btn">Download CV</a>
            </div>
        </div>
    </div>
  )
}

export default Hero;
