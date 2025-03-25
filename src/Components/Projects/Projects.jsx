import React from 'react'
import './Projects.css'
import work1 from '../../assets/work1.png'
import project2 from '../../assets/project2.png'
import cinema2 from '../../assets/cinema2.png'
import work4 from '../../assets/work4.png'
import comms1 from '../../assets/comms1.png' // Add import for the new project image

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projects-title'>
            <h1>Projects</h1>
            <p>Imagination Trumps Knowledge</p>
        </div>              
        <div className="projects-container">
            <div className="project-box">
              <i className="bx bx-home-alt"></i>
              <h3>Villabnb</h3>
              <p>A real estate platform where users can search for properties, view details, and make bookings.</p>
              <img src={work1} alt="Project1" />
              <div className="project-links">
                <a href="http://your-project-url.com" className="btn">visit</a>
                <a href="https://github.com/your-username/villabnb" className="github-link">
                  <i className='bx bxl-github'></i>
                </a>
              </div>
            </div>
            <div className="project-box">
              <i className='bx bxs-school'></i>
              <h3>Kenya University Tours App</h3>
              <p>This project provides an overview about higher education in Kenya. It showcases universities details including their programs, facilities and other information.</p>
              <img src={project2} alt="Project2" />
              <div className="project-links">
                <a href="https://kenya-university-tours-website.vercel.app/" className="btn">visit</a>
                <a href="https://github.com/LizWaweru/University-Tours-Website" className="github-link">
                  <i className='bx bxl-github'></i>
                </a>
              </div>
            </div>  
            <div className="project-box">
              <i className='bx bx-movie'></i>
              <h3>Flatdango Ticket Sales</h3>
              <p>Flatdango is an interactive web application that allows users to browse movies, view movie details, and purchase tickets as they explore current film offerings and select their showtimes.</p>
              <img src={cinema2} alt="Project3"/>
              <div className="project-links">
                <a href="https://wk3-code-challenge-omega.vercel.app/" className="btn">visit</a>
                <a href="git@github.com:LizWaweru/Flatdango-Movie-Theatre.git" className="github-link">
                  <i className='bx bxl-github'></i>
                </a>
              </div>
            </div>
            <div className="project-box">
              <i className='bx bx-movie-play'></i>
              <h3>Local Movie-site</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <img src={work4} alt="Project4" />
              <div className="project-links">
                <a href="http://your-project-url.com" className="btn">visit</a>
                <a href="https://github.com/your-username/local-movie-site" className="github-link">
                  <i className='bx bxl-github'></i>
                </a>
              </div>   
            </div>
            
            <div className="project-box">
              <i className='bx bxs-business'></i>
              <h3>To-do App</h3>
              <p>A responsive application built with react that allows users to manage their calender, organise tasks to their choice.</p>
              <img src={work4} alt="To-do list" />
              <div className="project-links">
                <a href="http://your-project-url.com" className="btn">visit</a>
                <a href="https://github.com/your-username-todo-list" className="github-link">
                  <i className='bx bxl-github'></i>
                </a>
              </div>
            </div>
           
            <div className="project-box ecommerce-box">
              <i className='bx bx-store'></i>
              <h3>Dreamery Stores</h3>
              <p>A modern e-commerce platform featuring product browsing, user accounts, shopping cart functionality, and secure checkout process.</p>
              <img src={comms1} alt="E-commerce Project" />
              <div className="project-links">
                <a href="http://your-ecommerce-url.com" className="btn">visit</a>
                <a href="https://github.com/LizWaweru/DreameryStore#" className="github-link">
                  <i className='bx bxl-github'></i>
                </a>
              </div>   
            </div>      
        </div>
    </div>
  )
}

export default Projects