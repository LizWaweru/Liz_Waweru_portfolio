import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/hero/hero.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Contact from './Components/Contact/Contact.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="blog"><Blog /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;