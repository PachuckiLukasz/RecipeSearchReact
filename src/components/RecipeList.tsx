import React, { useState } from "react";
import {
  RecipeContainer,
  RecipeCard,
  Ingredients,
} from "../styles/RecipeListStyles";

interface Recipe {
  recipe: {
    label: string;
    image: string;
    ingredientLines: string[];
  };
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <RecipeContainer>
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          onClick={() => handleToggle(index)}
          expanded={expandedIndex === index}
        >
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <p>{recipe.recipe.label}</p>
          {expandedIndex === index && (
            <Ingredients>
              <h3>Ingredients</h3>
              <ul>
                {recipe.recipe.ingredientLines.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
            </Ingredients>
          )}
        </RecipeCard>
      ))}
    </RecipeContainer>
  );
};

export default RecipeList;
