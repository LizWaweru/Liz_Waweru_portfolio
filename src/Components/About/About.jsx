import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
      </div>
      <div className='about-content'>
        <div className='about-para'>
          <p>I am a passionate and dedicated software developer with a keen eye for detail. I thrive in collaborative environments where I can bring my creativity and technical expertise to the table.</p>
          <p>My goal is to create innovative and impactful digital experiences that make people's lives easier, safer, and more convenient.</p>
        </div>
        <div className='about-skills'>
          <h2>What I do?</h2>
          <div className="skill-bar">
            <div className="services">
              <div className="services-container">
                <div className="service-card">
                  <i className="bx bxl-react"></i>
                  <h4>Static Website</h4>
                  <p>I make beautiful static websites using React and Tailwind, ensuring perfect responsive designs are delivered quickly.</p>
                </div>
                <div className="service-card">
                  <i className="bx bxl-nodejs"></i>
                  <i className="bx bxl-react"></i>
                  <i className="bx bxl-mongodb"></i>
                  <i className="bx bxl-flask"></i>
                  <h4>Full Stack Website</h4>
                  <p>I build full-stack web applications with React for the frontend, Flask for the backend, and MongoDB for the database. Users can perform dynamic CRUD operations seamlessly.</p>
                </div>
                <div className="service-card">
                  <i className="bx bxl-nodejs"></i>
                  <h4>Node Website</h4>
                  <p>I specialize in Node.js websites for optimized performance, seamless routing, and fast-loading, SEO-friendly pages.</p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div> // Properly closed div
  );
};

export default About;
