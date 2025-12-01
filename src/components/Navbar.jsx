import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center space-x-5 text-lg font-normal mb-4'>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive 
            ? "px-5 py-1 rounded-md bg-gray-900 text-gray-300" 
            : "text-gray-300"
        }
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          isActive 
            ? "px-5 py-1 rounded-md bg-gray-900 text-gray-300" 
            : "text-gray-300"
        }
      >
        About
      </NavLink>

      <NavLink 
        to="/recipes" 
        className={({ isActive }) => 
          isActive 
            ? "px-5 py-1 rounded-md bg-gray-900 text-gray-300" 
            : "text-gray-300"
        }
      >
        Recipes
      </NavLink>

      <NavLink 
        to="/create-recipe" 
        className={({ isActive }) => 
          isActive 
            ? "px-5 py-1 rounded-md bg-gray-900 text-gray-300" 
            : "text-gray-300"
        }
      >
        Create Recipe
      </NavLink>
    </div>
  )
}

export default Navbar
