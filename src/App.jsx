import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/newpassword/:userid' element={<ForgotPassword />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
