import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-700 px-4 md:px-6 lg:px-[10%] py-4 text-white'>
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App
