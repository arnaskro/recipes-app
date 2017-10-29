import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class RecipesListItem extends React.Component {

  render() {
    return (
      <div className="col-12 col-sm-6 col-md-3">
        <div className="RecipesListItem">
          <Card>
            <CardBody>
              <CardTitle>{this.props.title}</CardTitle>
              <CardSubtitle>{this.props.categories.join(' / ')}</CardSubtitle>
            </CardBody>
            <CardBody>
              <Button color="primary" onClick={() => this.props._selectAction(this.props.id)} >Select</Button> {' '}
              <Button color="danger" onClick={() => this.props._removeAction(this.props.id)}>Remove</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }

}

export default RecipesListItem;