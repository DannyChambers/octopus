
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class T3 extends Component {
  render() {

    const { classes, text } = this.props;

    return (
      <p className={`t3 ${this.props.classes}`}>{text}</p>

    );
  }
}

T3.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string.isRequired,
};

T3.defaultProps = {
  classes: "",
  text: "The Quick Brown Fox Jumps Over The Lazy Dog",
};