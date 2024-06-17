import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetail: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();

  // Check if recipeId is defined
  if (!recipeId) {
    return <div>Invalid recipe ID.</div>;
  }

  const recipe = JSON.parse(localStorage.getItem(recipeId) || "null");

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h2>{recipe.recipe.label}</h2>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.recipe.ingredientLines.map(
          (ingredient: string, index: number) => (
            <li key={index}>{ingredient}</li>
          )
        )}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
