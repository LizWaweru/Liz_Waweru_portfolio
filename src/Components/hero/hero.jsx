import React from 'react';
import './hero.css';
import image from '../../assets/image.png';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={image} alt="" />
        <h1> Turning Vision Into Reality With Code.</h1>
        <p>I'm Elizabeth, a <span>Software Developer</span> dedicated to turning ideas into innovative web applications.</p>
        <div className="hero-btns">
            <div className="hero-connect">Get In Touch</div>
            <div className="hero-resume">Download CV</div>
        </div>
    </div>
  )
}

export default Hero;
