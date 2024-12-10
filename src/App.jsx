import './styles/styles.scss';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Navbar';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {

  return (
    <>
      <Navbar />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
