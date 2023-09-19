import { useState } from 'react'
import {BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import './components/frontpage.css'
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'
import VanDetail from './components/VanDetail'
import Payment from './components/Payment'
import Host from './components/Host'
import Dashboard from './components/Dashboard'
import Reviews from './components/Reviews'
import Income from './components/Income'
import Details from './components/Details'
import Photos from './components/Photos'
import Pricing from './components/Pricing'
import Myvans from './components/Myvans'
import Myvan from './components/Myvan'

import "./server"
function App() {
  return <BrowserRouter>
  
  <Routes>
  <Route element={<Navbar/>}>
    <Route path='/' element={<Home />}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Vans'>
        <Route index element={<Vans/>}/>
        <Route path=':x' element={<VanDetail/>} />
        <Route path=':x/Payment' element={<Payment/>}/>
    </Route>
    <Route path='/Host' element={<Host/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='income' element={<Income/>}/>
        <Route path='reviews' element={<Reviews/>}/>
        <Route path='myvans' element={<Myvans/>}/>
        <Route path='myvans/:id' element={<Myvan/>}>
          <Route index element={<Details/>}/>
          <Route path='pricing' element={<Pricing/>}/>
          <Route path='photos' element={<Photos/>}/>
        </Route>
    </Route>
  </Route>
  
  </Routes>


  </BrowserRouter>
}

export default App
