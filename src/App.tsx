import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from './pages/LoginScreen'
import Navigation from './Menu/pages/Navigation'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginScreen/>}/>
          <Route path='/dashboard' element={<Navigation/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
