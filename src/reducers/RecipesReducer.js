import * as TYPES from '../constants/RecipeActionTypes';
import * as RecipesData from '../data/recipes.json';
import * as CategoriesData from '../data/categories.json';

import _ from 'lodash';

export const initialState = {
  recipes: RecipesData,
  categories: CategoriesData,
  selectedRecipe: null,
  newRecipesModelIsOpen: false,
  formDetails: {
    title: "",
    url: "",
    description: "",
    categories: []
  },
  submitBtnEnabled: false,
  activeCategory: null
}

export default (state = initialState, action) => {

  switch (action.type) {
    case TYPES.FILTER_RECIPES: {
      return {
        ...state, 
        activeCategory: action.payload
      }
    }
    case TYPES.READ_RECIPE: {
      return {
        ...state, 
        selectedRecipe: action.payload
      }
    }
    case TYPES.DESTROY_RECIPE: {
      return {
        ...state, 
        selectedRecipe: null,
        recipes: _.remove(state.recipes, item => item.id !== action.payload)
      }
    }
    case TYPES.NEW_RECIPE: {
      return {
        ...state, 
        newRecipesModelIsOpen: !state.newRecipesModelIsOpen,
        submitBtnEnabled: false
      }
    }
    case TYPES.CREATE_RECIPE: {
      return {
        ...state, 
        recipes: _.concat(state.recipes, {
          "id": _.maxBy(state.recipes, 'id').id + 1,
          "title": action.payload.title,
          "description": action.payload.description,
          "image": action.payload.url,
          "categories": _.map(action.payload.categories, x => parseInt(x, 10))
        }),
        newRecipesModelIsOpen: false,
        formDetails: initialState.formDetails
      }
    }
    case TYPES.UPDATE_RECIPE_FORM_DETAILS: {

      const updatedDetails = action.payload;
      const submitBtnEnabled = updatedDetails.title.length > 0 && updatedDetails.description.length > 0 && updatedDetails.categories.length > 0 && updatedDetails.url.length > 0;
      
      return {
        ...state, 
        formDetails: updatedDetails,
        submitBtnEnabled: submitBtnEnabled
      }
    }
    default: return state;
  }

}