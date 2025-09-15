// Portfolio application
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Certificates from './components/Certificates/Certificates'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Resume from './components/Resume/Resume'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Certificates />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default App