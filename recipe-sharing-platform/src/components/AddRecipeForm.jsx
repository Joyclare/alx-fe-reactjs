import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    // Example submission logic
    console.log({ title, ingredients, steps });
    setError("");
    setTitle("");
    setIngredients("");
    setSteps("");
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 md:space-y-6"
      >
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded w-full md:w-3/4 mx-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Ingredients (separate with commas)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border p-3 rounded w-full md:w-3/4 mx-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
        ></textarea>
        <textarea
          placeholder="Preparation Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border p-3 rounded w-full md:w-3/4 mx-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="6"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition md:w-1/3 mx-auto"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
