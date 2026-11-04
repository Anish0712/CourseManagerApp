import React from 'react'
import Home from './components/Home'
import AddCourse from './components/AddCourse'
import Navbar from './components/Navbar'
import EditCourse from './components/EditCourse'
import ShowCourse from './components/ShowCourse'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/add' element={<AddCourse />}/>
        <Route path='/show/:id' element={<ShowCourse />}/>
        <Route path='/edit/:id' element={<EditCourse />}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App