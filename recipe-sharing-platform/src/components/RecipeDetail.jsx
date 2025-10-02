import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipes from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipes.find((item) => item.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-red-500">Recipe not found!</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <h1 className="text-3xl font-bold mt-4 mb-2">{recipe.title}</h1>
      <p className="text-gray-700 mb-4">{recipe.summary}</p>

      {/* Ingredients Section */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5 space-y-1">
          {recipe.ingredients && recipe.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal pl-5 space-y-2">
          {recipe.instructions && recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
