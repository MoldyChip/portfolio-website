import React from 'react'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import About from './components/About'
import Home from './components/Home'
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
   <NavBar />
   <div className="container">
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/about' element={<About />} />
   </Routes>
   </div>
   </>
  )
}

export default App
