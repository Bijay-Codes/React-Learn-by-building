import './index.css';
import { recipes } from './Storage/recipiedata';
import { useState } from 'react';
export default function App() {
  const [recipeList, setRecipe] = useState(recipes);
  return (
    <>
      <h1 className='text-3xl text-center font-extrabold p-6 underline underline-offset-8'><span className='text-(--accent-bg) uppercase'>Recipe</span>-picker</h1>
      <div className="bg-(--surface-bg) p-10 rounded w-full max-w-300 m-auto
    grid grid-cols-[1fr_auto]
     border-l-4 border-(--primary-bg)"
      >
        <div className="flex flex-col gap-6">
          {
            recipeList.map(data => {
              return <RenderRecipePane key={data.id} recipe={data} recipes={recipeList} setRecipe={setRecipe} />
            })
          }
        </div>
        <RenderDetailsPane recipeList={recipeList} setRecipe={setRecipe} />
      </div>
    </>
  )
}

function RenderRecipePane({ recipe, recipes, setRecipe }) {
  return (
    <div className='bg-(--surface-muted-bg) text-(--surface-fg) p-3 min-w-70 rounded-lg hover:bg-(--primary-bg) hover:text-(--primary-fg) hover:border-(--accent-bg) border-2 border-(--surface-muted-fg)/30'
      onClick={() => { handleClick(recipe.id, recipes, setRecipe) }}>
      <h1 className="text-xl font-extrabold">{recipe.name}</h1>
      <h2 className="text-sm">{recipe.overview}</h2>
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
      <div className="bg-(--success-color)/70 border border-(--success-color) text-(--success-fg) h-fit p-4 rounded-lg text-center mx-6">
        Select a recipe, Lets cook !
      </div>
    )
  } else {
    const recipe = recipeList.find(data => data.isSelected === true);
    const { name, overview, ingredients, steps } = recipe;
    return (
      <div className="max-w-200 px-6 flex flex-col gap-8">
        <h1 className="text-2xl">{name}</h1>
        <h2 className="">{overview}</h2>
        <div className="flex gap-3 flex-wrap bg-(--surface-muted-bg) py-4 px-4 rounded-l-sm rounded-xl border-l-4 border-(--secondary-bg)">{
          ingredients.map((ing, i) => {
            return <span key={i} className="bg-(--accent-bg) text-(--accent-fg) rounded px-2 py-1 hover:bg-(--primary-bg) hover:text-(--primary-fg)">{ing}</span>
          })
        }
        </div>
        <div className="text-(--surface-muted-fg)">
          {
            steps.map((step, i) => {
              return <div className='hover:text-(--page-fg)' key={i}><span className='text-(--primary-bg)'>⃝</span> {step} </div>
            })
          }
        </div>
        <button className="bg-(--danger-color) text-(--danger-fg) px-4 py-2 rounded-lg w-fit"
          onClick={() => handleReset(setRecipe, recipeList)}>
          Reset
        </button>
      </div >
    )
  }
}
function handleReset(setRecipe) {
  setRecipe(recipeList => recipeList.map(data => {
    return { ...data, isSelected: false }
  }))
}
