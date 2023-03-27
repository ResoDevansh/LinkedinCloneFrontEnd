import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

const App = () => {
  return (<>
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </Router>
  </>)
}

export default App

