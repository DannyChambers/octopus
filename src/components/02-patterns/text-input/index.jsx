
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class TextInput extends Component {

  render() {

    return (
      <div className="text-input">
      	<input type="text" value={this.props.value} readOnly />
      </div>
    );
  }
}

TextInput.propTypes = {

};

TextInput.defaultProps = {

};