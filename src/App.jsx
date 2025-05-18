import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import './App.css'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Services/>
    </div>
  )
}

export default App