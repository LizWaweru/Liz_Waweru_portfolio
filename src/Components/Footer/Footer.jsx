import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src='' alt=""/>
                <div className='social-media'>
                <a href="https://x.com/lizwesh96?t=9YbpI_0X7SnpWpTWNY-Ew&s=09"><i class='bx bxl-twitter'></i></a>
                <a href="https://facebook.com/example"><i class='bx bxl-facebook'></i></a>
                <a href="https://instagram.com"><i class='bx bxl-instagram'></i></a>
                <a href="https://linkedin.com/in/elizabeth-waweru-n"><i class='bx bxl-linkedin'></i></a>
                </div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>© 2025 Elizabeth Waweru. All rights reserved.</p>
            <p className='footer-bottom-right'>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </p>
        </div>   
    </div>
  )
}

export default Footer