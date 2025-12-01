import React, { createContext, useState } from "react";

export const recipeContext = createContext();

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([
  {
    "id": "1",
    "image": "https://example.com/images/pasta.jpg",
    "title": "Creamy Alfredo Pasta",
    "chef": "Giovanni Rossi",
    "description": "A rich and creamy Italian pasta dish with parmesan and butter.",
    "ingredients": "Fettuccine, Butter, Parmesan, Garlic, Cream, Salt, Pepper",
    "instructions": "Boil pasta until al dente. In a pan, melt butter, add garlic, cream, and parmesan. Toss pasta in sauce and serve hot.",
    "category": "category1"
  },
  {
    "id": "2",
    "image": "https://example.com/images/biryani.jpg",
    "title": "Hyderabadi Chicken Biryani",
    "chef": "Ayesha Khan",
    "description": "Aromatic rice layered with spiced chicken, cooked to perfection.",
    "ingredients": "Basmati Rice, Chicken, Yogurt, Spices, Onion, Mint, Coriander",
    "instructions": "Marinate chicken with yogurt and spices. Cook rice separately. Layer rice and chicken, seal pot, and cook on low heat.",
    "category": "category2"
  },
  {
    "id": "3",
    "image": "https://example.com/images/tacos.jpg",
    "title": "Mexican Beef Tacos",
    "chef": "Carlos Ramirez",
    "description": "Crispy tacos filled with seasoned beef, salsa, and cheese.",
    "ingredients": "Taco Shells, Ground Beef, Onion, Tomato, Lettuce, Cheese, Salsa",
    "instructions": "Cook beef with onion and spices. Fill taco shells with beef, lettuce, tomato, cheese, and salsa. Serve immediately.",
    "category": "category3"
  },
  {
    "id": "4",
    "image": "https://example.com/images/sushi.jpg",
    "title": "California Sushi Roll",
    "chef": "Hiro Tanaka",
    "description": "A classic sushi roll with crab, avocado, and cucumber.",
    "ingredients": "Sushi Rice, Nori, Crab Meat, Avocado, Cucumber, Soy Sauce",
    "instructions": "Spread rice on nori sheet, add crab, avocado, and cucumber. Roll tightly, slice, and serve with soy sauce.",
    "category": "category4"
  },
  {
    "id": "5",
    "image": "https://example.com/images/pancakes.jpg",
    "title": "Fluffy Pancakes",
    "chef": "Emily Johnson",
    "description": "Soft and fluffy pancakes perfect for breakfast.",
    "ingredients": "Flour, Milk, Eggs, Sugar, Baking Powder, Butter, Maple Syrup",
    "instructions": "Mix dry and wet ingredients separately, then combine. Pour batter onto hot pan, cook until golden. Serve with butter and syrup.",
    "category": "category1"
  }
]
)


  return (
    <recipeContext.Provider value={{ data, setData }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
