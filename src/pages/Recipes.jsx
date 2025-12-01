import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'

const Recipes = () => {
  const { data } = useContext(recipeContext);

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-white mb-10">🍴 Recipe Collection</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data && data.map((item) => (
          <div 
            key={item.id} 
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            {/* Recipe Image
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover"
            /> */}

            {/* Recipe Content */}
            <div className="p-5 text-gray-200">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-400 mb-4">👨‍🍳 Chef: {item.chef}</p>
              
              <p className="mb-3">
                <span className="font-semibold text-yellow-400">Description:</span> {item.description}
              </p>
              
              <p className="mb-3">
                <span className="font-semibold text-green-400">Ingredients:</span> {item.ingredients}
              </p>
              
              <p className="mb-3">
                <span className="font-semibold text-blue-400">Instructions:</span> {item.instructions}
              </p>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-600 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recipes
