// Portfolio/src/App.jsx
// Portfolio application
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Certificates from './components/Certificates/Certificates'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'

const App = () => {
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

export default App