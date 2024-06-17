import React from "react";
import { useParams } from "react-router-dom";
import { RecipeDetailContainer } from "../styles/RecipeDetailStyles";

const RecipeDetail: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();

  if (!recipeId) {
    return <div>Invalid recipe ID.</div>;
  }

  const recipe = JSON.parse(localStorage.getItem(recipeId) || "null");

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <RecipeDetailContainer>
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
    </RecipeDetailContainer>
  );
};

export default RecipeDetail;
