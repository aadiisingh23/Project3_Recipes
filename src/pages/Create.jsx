import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipeContext } from '../context/RecipeContext';
import { nanoid } from 'nanoid';

const Create = () => {
  const {register,handleSubmit,reset} = useForm();
  const{data,setData} = useContext(recipeContext);
  const submitHandler = (recipe) => {
    console.log(data);

    recipe.id = nanoid();
    // const copyData = [...data];
    // copyData.push(recipe);
    // setData(copyData);
    setData([...data,recipe])
    reset();
  }
  return (
  <div className='flex justify-center w-full  px-3 py-2 mt-12'>
  <form className='w-[330px] max-w-lg space-y-4 bg-gray-800 p-6 rounded-md' onSubmit={handleSubmit(submitHandler)}>
  <input type="url" className='block border-b outline-0 p-2' {...register("image")} placeholder='Enter Image Url'  />
  {/* <small className='text-red-300'>This is the error</small> */}
  <input type="text" className='block border-b outline-0 p-2' {...register("title")} placeholder='Recipe Title' />
  <input type="text" className='block border-b outline-0 p-2' {...register("chef")} placeholder='Chef Name' />
  {/* <small className='text-red-300'>This is the error</small> */}
  <textarea type="text" className='block border-b outline-0 p-2' {...register("description")} placeholder='Start from Here' />
  {/* <small className='text-red-300'>This is the error</small> */}
  <textarea type="text" className='block border-b outline-0 p-2' {...register("ingredients")} placeholder='Enter Ingredients' />
  {/* <small className='text-red-300'>This is the error</small> */}
  <textarea type="text" className='block border-b outline-0 p-2' {...register("instructions")} placeholder='Enter Recipe Instructions ' />
  {/* <small className='text-red-300'>This is the error</small> */}
  <select name="category" id="category" {...register("category")} className='block border-b outline-0 p-2'>
    <option value="category1">Category 1</option>
    <option value="category2">Category 2</option>
    <option value="category3">Category 3</option>
    <option value="category4">Category 4</option>
  </select>
  <button className='px-3 py-1 mt-2 rounded-md bg-gray-700 flex w-full text-center justify-center'>Save Recipe</button>

  </form>
        
    </div>
  )
}

export default Create
