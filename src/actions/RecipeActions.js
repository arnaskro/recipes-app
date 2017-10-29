import * as TYPES from '../constants/RecipeActionTypes';

export const readRecipe = (id = -1) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.READ_RECIPE,
      payload: id
    })
  }
}

export const removeRecipe = (id = -1) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.DESTROY_RECIPE,
      payload: id
    })
  }
}

export const newRecipe = () => {
  return (dispatch) => {
    dispatch({
      type: TYPES.NEW_RECIPE
    })
  }
}

export const createRecipe = (objectDetails = null) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.CREATE_RECIPE,
      payload: objectDetails
    })
  }
}

export const updateFormDetails = (formDetails = null) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.UPDATE_RECIPE_FORM_DETAILS,
      payload: formDetails
    })
  }
}