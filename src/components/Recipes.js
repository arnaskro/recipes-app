import React from 'react';

import RecipesList from './RecipesList';
import SelectedRecipe from './SelectedRecipe';
import RecipesFilter from './RecipesFilter';

export default class Recipes extends React.Component {

  render() {
    return (
      <div className="Recipes">
        <RecipesFilter />
        <div className="container">
          <RecipesList />
        </div>
        <hr />
        <div className="container">
          <SelectedRecipe />
        </div>
      </div>
    )
  }

}