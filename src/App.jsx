import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Register from './pages/register/Register'
import AboutMe from './pages/about-me/AboutMe'
import Gallery from './pages/gallery/Gallery'
import NewTestimonial from './pages/testimonios/newTestimonial'
import DeleteTestimonial from './pages/testimonios/deleteTestimonial'
import Blogs from './pages/blogs/Blogs'
import MyProfile from './pages/profile/MyProfile'
import NewEmail from './pages/newEmail/NewEmail'
import NewPassword from './pages/newPassword/NewPassword'
import AllTestimonials from './pages/testimonios/AllTestimonials'

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/newpassword/:userid' element={<ForgotPassword />} />
        <Route path='/changeemail/:userid' element={<NewEmail />} />
        <Route path='/changepassword/:userid' element={<NewPassword />} />
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/createtestimonials' element={<NewTestimonial />} />
        <Route path='/deletetestimonials/:opinionid' element={<DeleteTestimonial />} />
        <Route path='/testimonials' element={<AllTestimonials />} />
      </Routes>
    </>
  )
}

export default App
