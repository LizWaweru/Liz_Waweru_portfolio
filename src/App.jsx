import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/hero/hero.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Blog from './Components/Blog/Blog.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
    </div>
  );
}

export default App;
