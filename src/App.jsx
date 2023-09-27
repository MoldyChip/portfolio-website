import React from 'react'
import NavBar from './components/NavBar'
import Projects from './Projects/Projects'
import About from './About/About'
import Home from './HomePage/Home'
import NotFound from './NotFound/NotFound'
import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
   <NavBar />
   <div className="container">
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/about' element={<About />} />
    <Route path='*' element={<NotFound />} />
      </Routes>
   </div>
   </>
  )
}

export default App
