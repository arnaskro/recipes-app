import React from 'react';

import * as actions from '../actions/FilterActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RecipesFilter extends React.Component {

  toggleActive(id) {
    this.props.actions.filterRecipes(id);
  }

  render() {
    return (
      <div className="RecipesFilter">
        <div className="btn-group btn-group-sm" role="group">
          <button type="button" className={`btn ${this.props.active === null ? 'btn-primary' : 'btn-dark'}`} 
            onClick={() => this.toggleActive(null)}>Show all</button>
          {

            this.props.categories.map((cat, index) => 
            <button 
            key={index} 
            type="button" 
            className={`btn ${this.props.active === cat.id ? 'btn-primary' : 'btn-dark'}`}
            onClick={() => this.toggleActive(cat.id)}
            >
            {cat.title}
            </button>
            )

          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.recipes.categories,
    active: state.recipes.activeCategory
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipesFilter);