import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

class SelectedRecipe extends React.Component {

  render() {
    if (this.props.item === null)
      return (
        <div className="SelectedRecipe text-center">
          Please select a recipe
        </div>
      )
    else
      return (
        <div className="SelectedRecipe">
          <h1 className="text-center">Selected Recipe</h1>
          <br />
          <div className="row">
            <div className="col-12 col-sm-6">
              <img className="img-fluid rounded" src={this.props.item.image} alt={this.props.item.title}/>
            </div>
            <div className="col-12 col-sm-6">
              <strong>Title: </strong>{this.props.item.title} <br />
              <strong>Description: </strong>{this.props.item.description}
            </div>
          </div>
        </div>
      )
  }

}

const mapStateToProps = (state) => {
  return {
    item: state.recipes.selectedRecipe !== null ? _.findLast(state.recipes.recipes, x => x.id === state.recipes.selectedRecipe) : null
  }
}

export default connect(mapStateToProps)(SelectedRecipe);