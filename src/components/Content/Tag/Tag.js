import React, { Component } from 'react';
import './Tag.css';
import { Label } from 'react-bootstrap';



class Tag extends Component {
  render() {

    return (
        <Label bsStyle="info" className="Tag">
          {this.props.data}
        </Label>
    );
  }
}

export default Tag;
