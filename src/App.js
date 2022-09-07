import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/styles.css'
import Header from './components/Header'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import AddReview from './pages/AddReview'
import SinglePost from './pages/SinglePost'
import AdminChanges from './pages/Admin'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/add-post' element={<AddReview />} />
        <Route path='/single-post' element={<SinglePost />} />
        <Route path='/admin' element={<AdminChanges />} />
        <Route path='*' element={<h2 className='error404'>The Page you are looking for is in another Castle</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
