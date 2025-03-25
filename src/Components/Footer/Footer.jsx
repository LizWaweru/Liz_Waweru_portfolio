import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src='' alt=""/>
                <p>I am looking for collaboration in any backend projects with experience in Python, Django, express and mongo db</p>
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
