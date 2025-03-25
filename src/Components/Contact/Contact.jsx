import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I'm currently available to take new projects, feel feel to contact me.</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                    <i class='bx bxs-envelope'></i><p>nyawirawaweru@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <i class='bx bxs-phone-call'></i><p>+254 708 944460</p>
                    </div>
                    <div className='contact-detail'>
                        <i class='bx bxs-map'></i><p>Nairobi, Kenya</p>
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'></input>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'></input>
                <label htmlFor=''>Write your message here</label>
                <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>

        </div>
      
    </div>
  )
}

export default Contact
