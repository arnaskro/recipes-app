import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import RecipesReducer from './RecipesReducer';

// Combine the reducers
const reducers = combineReducers({
  recipes: RecipesReducer
});

// apply the middleware
const middleware = applyMiddleware(thunk);

// Create store
const store = 
  (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
  createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware
  ) : createStore(reducers, middleware);

export default store;
