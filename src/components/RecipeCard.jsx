import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
  return (
          <Link
            to={`/recipes/details/${recipe.id}`}
            key={recipe.id} 
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover"
            />

            {/* Recipe Content */}
            <div className="p-5 text-gray-200">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-sm text-gray-400 mb-4">👨‍🍳 Chef: {recipe.chef}</p>
              
              <p className="mb-3">
                <span className="font-semibold text-yellow-400">Description:</span> {recipe.description}
              </p>
              
              <p className="mb-3">
                <span className="font-semibold text-green-400">Ingredients:</span> {recipe.ingredients}
              </p>
              
              <p className="mb-3">
                <span className="font-semibold text-blue-400">Instructions:</span> {recipe.instructions}
              </p>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-600 rounded-full">
                {recipe.category}
              </span>
            </div>
          </Link>
  )
}

export default RecipeCard
