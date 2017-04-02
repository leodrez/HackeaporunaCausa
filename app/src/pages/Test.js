import React, { Component, PropTypes } from 'react';
import { insertUser } from '../api';
class Testing extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {

    return (
      <button onClick={() => insertUser()}></button>
    );
  }
}

export default Testing;

// default props
Testing.defaultProps = {};

// propTypes
Testing.propTypes = {};