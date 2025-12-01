import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const { data } = useContext(recipeContext);

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-white mb-10">🍴 Recipe Collection</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data && data.map((item) => (
            <RecipeCard key={item.id} recipe={item} />
        ))}
      </div>
    </div>
  )
}

export default Recipes
