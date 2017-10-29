import React from 'react';
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Input } from 'reactstrap';

import _ from 'lodash';
import * as actionCreators from '../actions/RecipeActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddRecipeListItem extends React.Component {

  toggle() {
    this.props.actions.newRecipe();
  }

  updateForm(updatedValues) {
    this.props.actions.updateFormDetails(_.assign({}, this.props.form, updatedValues))
  }

  render() {
    return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="AddRecipeListItem RecipesListItem">
        <Card onClick={() => this.toggle()}>
          <span>+</span>
        </Card>
        <Modal isOpen={this.props.open} toggle={() => this.toggle()}>
          <ModalHeader toggle={() => this.toggle()}>Add new recipe</ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Label sm={2}>Title</Label>
              <Col sm={10}>
                <Input type="text" name="title" value={this.props.form.title} placeholder="What is it?" onChange={(e) => this.updateForm({ title: e.target.value })} />
              </Col>
            </FormGroup><FormGroup row>
            <Label sm={2}>Image</Label>
            <Col sm={10}>
              <Input type="text" name="image" value={this.props.form.url} placeholder="How does it look like?" onChange={(e) => this.updateForm({ url: e.target.value })} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Select Multiple</Label>
            <Col sm={10}>
              <Input type="select" name="selectMulti" multiple value={this.props.form.categories} onChange={() => {}}>
                {this.props.categories.map((category, index) => <option key={index} value={category.id} onClick={(e) => this.updateForm({ categories: _.xor(this.props.form.categories, [e.target.value]) })}>{category.title}</option>)}
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Desc</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" value={this.props.form.description} placeholder="How can you describe this?" onChange={(e) => this.updateForm({ description: e.target.value })} />
            </Col>
          </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" disabled={!this.props.submitBtnEnabled} onClick={() => this.props.actions.createRecipe(this.props.form)}>Create</Button>{' '}
              <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
            </ModalFooter>
        </Modal>
      </div>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    open: state.recipes.newRecipesModelIsOpen,
    categories: state.recipes.categories,
    form: state.recipes.formDetails,
    submitBtnEnabled: state.recipes.submitBtnEnabled
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    actions: bindActionCreators(actionCreators, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeListItem);