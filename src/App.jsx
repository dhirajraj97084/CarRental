import React from 'react'


import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>          
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
