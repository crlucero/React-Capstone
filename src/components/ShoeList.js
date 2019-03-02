import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './ShoeList.css';

export default class ShoeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Card>
          <CardImg top src={this.props.shoe.imageAddress} />
          <CardBody>
            <CardTitle>{this.props.shoe.name}</CardTitle>
            <CardSubtitle>{this.props.shoe.price}</CardSubtitle>
            <Button color="danger">WANT</Button>
            <Button color="danger">ADD TO CART</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
