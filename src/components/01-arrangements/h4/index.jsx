
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class H4 extends Component {
  render() {

    const { classes, text } = this.props;

    return (
      <h3 className={`h4 ${this.props.classes}`}>{text}</h3>

    );
  }
}

H4.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string.isRequired,
};

H4.defaultProps = {
  classes: "",
  text: "The Quick Brown Fox Jumps Over The Lazy Dog",
};