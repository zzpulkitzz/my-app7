import { useState } from 'react'
import {BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/About' element={<About/>}/>
  </Routes>
  </BrowserRouter>
}

export default App
