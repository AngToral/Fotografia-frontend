import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Register from './pages/register/Register'
import AboutMe from './pages/about-me/AboutMe'
import Gallery from './pages/gallery/Gallery'
import NewTestimonial from './pages/testimonios/newTestimonial'
import DeleteTestimonial from './pages/testimonios/deleteTestimonial'
import Blog from './pages/blog/Blog'

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
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/createtestimonials' element={<NewTestimonial />} />
        <Route path='/deletetestimonials/:opinionid' element={<DeleteTestimonial />} />
        {/* Blog
        mi perfil
        */}
      </Routes>
    </>
  )
}

export default App
