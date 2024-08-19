
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Register from './pages/register/Register'
import AboutMe from './pages/about-me/AboutMe'

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/newpassword/:userid' element={<ForgotPassword />} />
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />} />
        {/* 
        gallery
        agregar nueva entrada 
        elimino
        edito
        mi perfil
        */}
      </Routes>
    </>
  )
}

export default App
