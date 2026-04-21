import './index.css';
import { recipes } from './Storage/recipiedata';
import { useState } from 'react';
export default function App() {
  const [recipeList, setRecipe] = useState(recipes);
  return (
    <div className="recipe-box bg-gray-400 p-4 rounded-2xl">
      <div className="recipe-pane">
        {
          recipeList.map(data => {
            return <RenderRecipePane key={data.id} recipe={data} recipes={recipeList} setRecipe={setRecipe} />
          })
        }
      </div>
      <RenderDetailsPane recipeList={recipeList} setRecipe={setRecipe} />
    </div>
  )
}

function RenderRecipePane({ recipe, recipes, setRecipe }) {
  return (
    <div className="recipe flex-wrap bg-blue-300 m-4 px-8 rounded-2xl hover:bg-blue-100" onClick={() => { handleClick(recipe.id, recipes, setRecipe) }}>
      <h1 className="name">{recipe.name}</h1>
      <h2 className="overview">{recipe.overview}</h2>
    </div>
  )
}

function handleClick(id, recipeList, setRecipe) {
  setRecipe(recipeList => recipeList.map(data => {
    return id === data.id ? { ...data, isSelected: true } : { ...data, isSelected: false };
  }))
}

function RenderDetailsPane({ recipeList, setRecipe }) {
  let canRun = recipeList.every(item => item.isSelected === false);
  if (canRun) {
    return (
      <div className="details bg-red-200 w-min h-min p-4 whitespace-nowrap rounded-lg">
        No Recipe Selected
      </div>
    )
  } else {
    const recipe = recipeList.find(data => data.isSelected === true);
    const { name, overview, ingredients, steps } = recipe;
    return (
      <div className="details bg-blue-200 p-4 rounded-2xl">
        <h1 className="name">{name}</h1>
        <h2 className="overview">{overview}</h2>
        <div className="ingredients">{
          ingredients.map((ing, i) => {
            return <span key={i} className="ingredient">{ing}</span>
          })
        }
        </div>
        <div className="steps">
          {
            steps.map((step, i) => {
              return <div key={i} className="step">Step {i + 1 + ' ' + step} </div>
            })
          }
        </div>
        <button className="bg-gray-700 hover:bg-gray-500 text-white px-4 py-1 rounded reset-btn" onClick={() => handleReset(setRecipe, recipeList)}>Reset</button>
      </div>
    )
  }
}
function handleReset(setRecipe, recipeList) {
  setRecipe(recipeList => recipeList.map(data => {
    return { ...data, isSelected: false }
  }))
}
