import React, { useState } from 'react'
import Home from './components/Home/home'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/projects'
import './App.css'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  const handleNavigation = (section) => {
    setActiveSection(section)
  }

  return (
    <div className="app">
      <Navbar onNavigate={handleNavigation} activeSection={activeSection} />
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
    </div>
  )
}

export default App