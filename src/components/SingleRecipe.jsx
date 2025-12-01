import { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SingleRecipe = () => {
  const { data, setData } = useContext(recipeContext);
  const params = useParams();
  const navigate = useNavigate();

  // Find recipe by ID
  const recipe = data.find((r) => r.id === params.id);

  // Setup form with default values (prefilled)
  const { register, handleSubmit } = useForm({
    defaultValues: recipe || {}
  });

  // Update handler
  const submitHandler = (updatedRecipe) => {
    const newData = data.map((r) =>
      r.id === params.id ? { ...r, ...updatedRecipe } : r
    );
    setData(newData);
    navigate('/recipes'); // go back to recipes list
  };

  // Delete handler
  const deleteHandler = () => {
    const newData = data.filter((r) => r.id !== params.id);
    setData(newData);
    navigate('/recipes');
  };

  return recipe ? (
    <div className="w-full flex flex-col md:flex-row gap-6 p-4">
      {/* Left: Recipe Preview */}
      <div className="md:w-1/2 bg-gray-700 rounded-md p-4 text-white">
        <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <p className="mb-2"><span className="font-semibold">Chef:</span> {recipe.chef}</p>
        <p className="mb-2"><span className="font-semibold">Description:</span> {recipe.description}</p>
        <p className="mb-2"><span className="font-semibold">Ingredients:</span> {recipe.ingredients}</p>
        <p className="mb-2"><span className="font-semibold">Instructions:</span> {recipe.instructions}</p>
        <span className="inline-block mt-2 px-4 py-2 text-sm font-medium bg-purple-600 rounded-full">
          {recipe.category}
        </span>
      </div>

      {/* Right: Edit Form */}
      <form
        className="md:w-1/2 bg-gray-800 rounded-md p-6 text-white space-y-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input type="url" className="block w-full border-b bg-transparent outline-0 p-2" {...register("image")} placeholder="Enter Image Url" />
        <input type="text" className="block w-full border-b bg-transparent outline-0 p-2" {...register("title")} placeholder="Recipe Title" />
        <input type="text" className="block w-full border-b bg-transparent outline-0 p-2" {...register("chef")} placeholder="Chef Name" />
        <textarea className="block w-full border-b bg-transparent outline-0 p-2" {...register("description")} placeholder="Start from Here" />
        <textarea className="block w-full border-b bg-transparent outline-0 p-2" {...register("ingredients")} placeholder="Enter Ingredients" />
        <textarea className="block w-full border-b bg-transparent outline-0 p-2" {...register("instructions")} placeholder="Enter Recipe Instructions" />
        <select {...register("category")} className="block w-full border-b bg-transparent outline-0 p-2">
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          <option value="category4">Category 4</option>
        </select>
        <div className="flex gap-2">
          <button type="submit" className="px-3 py-2 mt-4 rounded-md bg-green-600 hover:bg-green-700 w-full text-center">
            Update Recipe
          </button>
          <button type="button" onClick={deleteHandler} className="px-3 py-2 mt-4 rounded-md bg-red-600 hover:bg-red-700 w-full text-center">
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="text-center text-white">Loading...</div>
  );
};

export default SingleRecipe;
