import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'   // ✅ Import About component
import Create from '../pages/Create'

const MainRoutes = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/create-recipe' element={<Create />} />
      </Routes>
    </div>
  )
}

export default MainRoutes
