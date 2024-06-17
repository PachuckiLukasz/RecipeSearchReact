import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import getRecipes from "./api/recipes";

const App: React.FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setError(null);
    try {
      const results = await getRecipes(query);
      setRecipes(results);
      results.forEach((recipe: any, index: number) => {
        if (!recipe.recipe.instructions) {
          recipe.recipe.instructions =
            "Instructions are not available for this recipe.";
        }
        localStorage.setItem(index.toString(), JSON.stringify(recipe));
      });
    } catch (error) {
      setError("An error occurred while fetching recipes. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={handleSearch} />
              {error && (
                <div style={{ color: "red", textAlign: "center" }}>{error}</div>
              )}
              <RecipeList recipes={recipes} />
            </>
          }
        />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
};

export default App;
