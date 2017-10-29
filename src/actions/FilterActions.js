import * as TYPES from '../constants/RecipeActionTypes';

export const filterRecipes = (id = null) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.FILTER_RECIPES,
      payload: id
    })
  }
}