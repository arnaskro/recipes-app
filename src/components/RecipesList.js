import React from 'react';
import _ from 'lodash';
import * as actions from '../actions/RecipeActions';

import AddRecipeListItem from './AddRecipeListItem';
import RecipesListItem from './RecipesListItem';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RecipesList extends React.Component {

  render() {
    return (
      <div className="RecipesList">
        <div className="row">
          {_.map(this.props.recipes, (item, index) => 
          <RecipesListItem 
            key={index} 
            {...item} 
            _selectAction={this.props.actions.readRecipe}
            _removeAction={this.props.actions.removeRecipe}
            />
          )}
          <AddRecipeListItem />
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    recipes: _.map(
      _.filter(
        state.recipes.recipes,
        x => state.recipes.activeCategory !== null ?
        _.includes(x.categories, state.recipes.activeCategory) : true
      ),
      item => _.assign({}, item, {
        categories: _.map(
          item.categories,
          cat => _.findLast(state.recipes.categories, x => x.id === cat).title
        )
      })
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);